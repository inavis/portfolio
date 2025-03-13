import React from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import expandIcon from "../../Images/ui-design.png";
import collapseIcon from "../../Images/developer.png";
import { useTranslation, Trans } from "react-i18next";
function Header({ translate, i18n, transWrapper }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const lngs = {
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
  };

  return (
    <header className="w-100">
      <div className="nav container">
        <div className="b-block d-lg-none section">
          <button className="trans-btn hamburger" onClick={handleMenu}>
            <img src={openMenu ? collapseIcon : expandIcon} alt="hamburger" />
          </button>
        </div>
        <div className="entire-options">
          {/* change lnaguage section */}
          <div className="language-menu">
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                onClick={() => i18n.changeLanguage(lng)}
                className="trans-btn text-white"
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
          {/* header menu */}
          <div className={`section menu ${openMenu ? "open" : ""}`}>
            <Link
              to={"#"}
              smooth
              className="trans-btn text-white font-16 text-decoration-none"
              onClick={handleMenu}
            >
              {translate("header.item1")}
            </Link>
            <Link
              to={"#about"}
              smooth
              className="trans-btn text-white font-16 text-decoration-none"
              onClick={handleMenu}
            >
              {translate("header.item2")}
            </Link>
            <Link
              to={"#skills"}
              smooth
              className="trans-btn text-white font-16 text-decoration-none"
              onClick={handleMenu}
            >
              {translate("header.item3")}
            </Link>
            <Link
              to={"#work"}
              smooth
              className="trans-btn text-white font-16 text-decoration-none"
              onClick={handleMenu}
            >
              {translate("header.item4")}
            </Link>
            <Link
              to={"#cv"}
              smooth
              className="trans-btn text-white font-16 text-decoration-none"
              onClick={handleMenu}
            >
              {translate("header.item5")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
