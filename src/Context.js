import { createContext, useState } from "react";
export const StateContext = createContext("");

function StateProvider({ children }) {
  let [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <StateContext.Provider value={{ popupOpen, openPopup, closePopup }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
