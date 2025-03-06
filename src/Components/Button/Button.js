import "./Button.css";

function Button({ iconPath, iconAlt, text, customClass }) {
  return (
    <div className={`basic-button ${customClass}`}>
      <button>
        <span>{text}</span>
        <span>
          <img src={iconPath} alt={iconAlt} />
        </span>
      </button>
    </div>
  );
}

export default Button;
