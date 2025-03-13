import "./CV.css";
import Button from "../Button/Button";
import RightArrow from "../../Images/right-arrow-1.png";
import { Link } from "react-router-dom";
import resume from "../../Pdf/Sivani-EU-resume.pdf";

function CV({ translate }) {
  return (
    <section id="cv" className="d-flex w-100">
      <Link to={resume} target="_blank" download={"Sivani-Resume"}>
        <Button
          text={translate("cv.btnText")}
          iconPath={RightArrow}
          iconAlt={"arrow"}
          customClass={"text-center-tab w-100"}
        />
      </Link>
    </section>
  );
}

export default CV;
