import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function About({ translate }) {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle
          mainText={translate("about.mainTitle")}
          subText={translate("about.subTitle")}
          type={"1"}
        />
        <div className="text-section">
          <div className="sub1">
            <h3 className="text-left text-white">
              {translate("about.text1")}{" "}
              <span className="text-teal">{translate("about.name")}</span>,
            </h3>
            <p className="text-left text-white">{translate("about.text2")}</p>
            <p className="text-left text-white">{translate("about.text3")}</p>
          </div>
          <div className="sub2">
            <ul>
              <li>
                <p className="text-left">{translate("about.title1")}:</p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: translate("about.fullName"),
                  }}
                ></p>
              </li>
              <li>
                <p className="text-left">{translate("about.title2")}:</p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: translate("about.city"),
                  }}
                ></p>
              </li>
              <li>
                <p className="text-left">{translate("about.title3")}:</p>
                <p className="text-left">{translate("about.dob")}</p>
              </li>
              <li>
                <p className="text-left">{translate("about.title4")}:</p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: translate("about.hobbies"),
                  }}
                ></p>
              </li>
              <li>
                <p className="text-left">{translate("about.title5")}:</p>
                <p
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: translate("about.languages"),
                  }}
                ></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
