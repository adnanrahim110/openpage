"use client";

const defaultEndpoint = process.env.NEXT_PUBLIC_ENDPOINT_URL;

const isFormElement = (value) =>
  typeof window !== "undefined" &&
  value instanceof window.HTMLFormElement;

const isFormData = (value) =>
  typeof FormData !== "undefined" && value instanceof FormData;

const humanize = (key) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (char) => char.toUpperCase());

const normalizeToFormData = (input) => {
  if (!input) {
    return new FormData();
  }

  if (isFormData(input)) {
    const clone = new FormData();
    input.forEach((value, key) => {
      clone.append(key, value);
    });
    return clone;
  }

  if (isFormElement(input)) {
    return new FormData(input);
  }

  const payload = new FormData();

  if (typeof input === "object") {
    Object.entries(input).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          payload.append(key, item ?? "");
        });
      } else if (value instanceof File) {
        payload.append(key, value);
      } else if (value !== undefined && value !== null) {
        payload.append(key, String(value));
      }
    });
  }

  return payload;
};

const hasValue = (value) => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

const safeInvoke = (fn, ...args) => {
  if (typeof fn !== "function") return;
  try {
    fn(...args);
  } catch (error) {
    console.error("submitForm callback error:", error);
  }
};

export const submitForm = async ({
  endpoint = defaultEndpoint,
  formData,
  requiredFields = [],
  extraFields = {},
  formName,
  onSuccess,
  onError,
} = {}) => {
  if (!endpoint) {
    const errorMessage =
      "Form endpoint is not configured. Please try again later.";
    safeInvoke(onError, errorMessage, { type: "config" });
    return {
      success: false,
      error: errorMessage,
    };
  }

  const payload = normalizeToFormData(formData);

  if (formName && !payload.has("formName")) {
    payload.set("formName", String(formName));
  }

  if (extraFields && typeof extraFields === "object") {
    Object.entries(extraFields).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      payload.set(key, value instanceof File ? value : String(value));
    });
  }

  const validationErrors = {};
  requiredFields.forEach((field) => {
    const value = payload.get(field);
    if (!hasValue(value)) {
      validationErrors[field] = `${humanize(field)} is required.`;
    }
  });

  if (Object.keys(validationErrors).length > 0) {
    return { success: false, validationErrors };
  }

  const body = new URLSearchParams();
  for (const [key, value] of payload.entries()) {
    if (value instanceof File) continue;
    body.append(key, value ?? "");
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const responseText = await response.text();
    let json;
    try {
      json = responseText ? JSON.parse(responseText) : null;
    } catch (error) {
      json = null;
    }

    const status = json?.status;
    const message =
      json?.message ||
      (response.ok
        ? "Unexpected response received from the server."
        : "Unable to submit the form at the moment. Please try again.");

    if (!response.ok || status !== "success") {
      const errorPayload = {
        success: false,
        error: message,
        statusCode: response.status || 500,
        data: json,
      };
      safeInvoke(onError, message, errorPayload);
      return errorPayload;
    }

    const successPayload = { success: true, data: json };
    safeInvoke(onSuccess, successPayload);
    return successPayload;
  } catch (error) {
    const message =
      error?.message ||
      "We could not reach the server. Please check your connection and try again.";
    safeInvoke(onError, message, { type: "network", error });
    return {
      success: false,
      error: message,
    };
  }
};
