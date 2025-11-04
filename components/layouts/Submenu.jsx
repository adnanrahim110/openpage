"use client";

import React, { useEffect, useState } from "react";

const Submenu = ({ children, extraClasses = "", visible }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    }
  }, [visible]);
  return (
    <ul
      className={`${extraClasses} transition-all duration-200 ease-out transform ${
        animate ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
      }`}
    >
      {children}
    </ul>
  );
};

export default Submenu;
