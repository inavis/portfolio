import React from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import expandIcon from "../../Images/ui-design.png";
import collapseIcon from "../../Images/developer.png";
function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="w-100">
      <div className="nav container">
        <div className="b-block d-lg-none section">
          <button className="trans-btn hamburger" onClick={handleMenu}>
            <img src={openMenu ? collapseIcon : expandIcon} alt="hamburger" />
          </button>
        </div>
        <div className={`section menu ${openMenu ? "open" : ""}`}>
          <Link
            to={"#"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
            onClick={handleMenu}
          >
            Home
          </Link>
          <Link
            to={"#about"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
            onClick={handleMenu}
          >
            About
          </Link>
          <Link
            to={"#skills"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
            onClick={handleMenu}
          >
            Skills
          </Link>
          <Link
            to={"#work"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
            onClick={handleMenu}
          >
            Work
          </Link>
          <Link
            to={"#cv"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
            onClick={handleMenu}
          >
            CV
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
