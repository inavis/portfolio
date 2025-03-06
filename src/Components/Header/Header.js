import React from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import expandIcon from "../../Images/ui-design.png";
import collapseIcon from "../../Images/developer.png";
function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
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
            to={"#home"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
          >
            Home
          </Link>
          <Link
            to={"#about"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
          >
            About
          </Link>
          <Link
            to={"#skills"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
          >
            Skills
          </Link>
          <Link
            to={"#work"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
          >
            Work
          </Link>
          <Link
            to={"#cv"}
            smooth
            className="trans-btn text-white font-16 text-decoration-none"
          >
            CV
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
