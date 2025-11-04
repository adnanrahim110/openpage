export const submitForm = async ({
  endpoint = "https://westernbookpublishing.com/api/sendEmail.php",
  // endpoint = "http://localhost/brands/westernbook-react/api/sendEmail.php",
  formData,
  requiredFields = [],
  onSuccess = () => { },
  onError = (_errMsg) => { },
}) => {
  const errors = {};
  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].toString().trim() === "") {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required *`;
    }
  });

  if (Object.keys(errors).length > 0) {
    return { success: false, validationErrors: errors };
  }

  try {
    const payloadObj = {
      ...formData,
      // normalize service to a string; supports multi-select forms like Signup2
      service: Array.isArray(formData.service)
        ? formData.service.join(", ")
        : (formData.service || "").toString(),
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams(payloadObj),
    });

    const payload = await res.json();

    if (payload.status === "success") {
      onSuccess(payload);
      return { success: true };
    } else {
      onError(payload.message || "Server returned an error");
      return { success: false, serverError: payload.message || "" };
    }
  } catch (networkError) {
    onError(networkError.message || "Network error");
    return { success: false, networkError: networkError.message };
  }
};
