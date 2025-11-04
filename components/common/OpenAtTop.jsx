"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OpenAtTop = () => {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.key]);

  return null;
};

export default OpenAtTop;
