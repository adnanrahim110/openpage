"use client";

import OpenAtTop from "@/components/common/OpenAtTop";
import ScrollToTop from "@/components/common/ScrollToTop";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import SideBar from "@/components/layouts/SideBar";
import PopupProvider from "@/context/PopupProvider";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Popup from "../layouts/Popup";

const AppShell = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const pathname = usePathname();

  return (
    <PopupProvider>
      <ReactLenis
        root
        options={{
          allowNestedScroll: true,
        }}
      />

      {pathname !== "/thankyou" && (
        <>
          <Header setIsSidebar={setIsSidebar} />
          <SideBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        </>
      )}

      <main>{children}</main>

      <AnimatePresence>
        {isPopupOpen && <Popup closePopup={() => setIsPopupOpen(false)} />}
      </AnimatePresence>

      <Suspense fallback={null}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Suspense>
      <OpenAtTop />

      {pathname !== "/thankyou" && (
        <>
          <ScrollToTop />
          <Footer />
        </>
      )}
    </PopupProvider>
  );
};

export default AppShell;
