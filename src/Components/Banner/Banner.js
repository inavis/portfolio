import "./Banner.css";
import Button from "../Button/Button";
import Gif1 from "../../Images/me-gif-1.gif";
import { HashLink as Link } from "react-router-hash-link";
import RightArrow from "../../Images/right-arrow-1.png";

function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <div className="text-section">
          <h1 className="text-white text-left text-center-tab w-100">
            I'm a React Web Developer
          </h1>
          <h3 className="text-white text-left text-center-tab">
            I specialize in building dynamic and responsive user interfaces with
            a keen eye for design and performance.
          </h3>
          <div className="w-100">
            <Link to="#about">
              <Button
                text={"About Me"}
                iconPath={RightArrow}
                iconAlt={"arrow"}
                customClass={"text-center-tab w-100"}
              />
            </Link>
          </div>
        </div>
        <div className="image-section">
          <img src={Gif1} alt="my photos with filters" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
