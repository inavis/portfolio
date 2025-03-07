import "./Popup.css";
import { StateContext } from "../../Context";
import { useContext } from "react";
import closeIcon from "../../Images/cross.png";

function Popup({ children }) {
  let { popupOpen, closePopup } = useContext(StateContext);
  return (
    <div className={`popup-template ${popupOpen ? "active" : ""}`}>
      <div className="overlay" onClick={closePopup}></div>
      <div className="modal">
        <div className="modal-content">
          <div className="w-100">
            <img
              className="close"
              src={closeIcon}
              alt="close"
              onClick={closePopup}
            />
          </div>
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  );
}

export default Popup;
