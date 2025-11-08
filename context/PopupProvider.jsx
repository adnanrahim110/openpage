import { createContext, useContext, useState } from "react";
import Popup from "../components/layouts/Popup";

const PopupCtx = createContext(() => {});
export const usePopup = () => useContext(PopupCtx);

export default function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = {
    openPopup: () => setOpen(true),
    closePopup: () => setOpen(false),
  };
  return (
    <PopupCtx.Provider value={value}>
      {children}
      {open && <Popup closePopup={value.closePopup} />}
    </PopupCtx.Provider>
  );
}
