import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./CTA.css";

function CTA() {
  let icons = [
    {
      svgIcon: faLinkedin,
      link: "https://www.linkedin.com/in/sivani-sutha-saravanan-9b552a148/",
    },
    { svgIcon: faGithub, link: "https://github.com/inavis" },
    { svgIcon: faDribbble, link: "https://dribbble.com/inavis" },
    { svgIcon: faPhoneSquare, link: "tel:917358579242" },
    {
      svgIcon: faWhatsapp,
      link: "https://web.whatsapp.com/send?phone=917358579242",
    },
    {
      svgIcon: faEnvelope,
      link: "mailto:sivani.ss.gis@gmail.com",
    },
  ];
  return (
    <section id="cta">
      <div className="social-links">
        {icons.map(({ svgIcon, link }, index) => {
          return (
            <div
              className="icon"
              key={`${svgIcon}-index`}
              onClick={() => {
                window.open(link);
              }}
            >
              <FontAwesomeIcon icon={svgIcon} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CTA;
