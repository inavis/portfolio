import "./Banner.css";
import Button from "../Button/Button";
import Gif1 from "../../Images/me-gif-1.gif";
import { HashLink as Link } from "react-router-hash-link";
import RightArrow from "../../Images/right-arrow-1.png";
import { Suspense } from "react";

function Banner({ translate }) {
  return (
    <Suspense fallback="loading">
      <section id="banner">
        <div className="container">
          <div className="text-section">
            <h1 className="text-white text-left text-center-tab w-100">
              {/* the text is generated based on the key added */}
              {translate("banner.title")}
            </h1>
            <h3 className="text-white text-left text-center-tab">
              {translate("banner.text")}
            </h3>
            <div className="w-100">
              <Link to="#about">
                <Button
                  text={translate("banner.btnText")}
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
    </Suspense>
  );
}

export default Banner;
