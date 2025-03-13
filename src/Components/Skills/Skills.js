import React from "react";
import "./Skills.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Marquee from "../Marquee/Marquee";
import htmlIcon from "../../Images/html.svg";
import cssIcon from "../../Images/css-alt.svg";
import jsIcon from "../../Images/javascript.svg";
import reactIcon from "../../Images/react.svg";
import reduxIcon from "../../Images/redux.svg";
import bootstrapIcon from "../../Images/bootstrap.svg";
import jqueryIcon from "../../Images/jquery.svg";
import materialIcon from "../../Images/materialUI-logo.png";
import expressIcon from "../../Images/Express-js.png";
import nodeIcon from "../../Images/node-js.svg";
import mongoIcon from "../../Images/mongodb.svg";
import adobeIcon from "../../Images/adobe.svg";
import networkIcon from "../../Images/Computer networking.png";
import backupIcon from "../../Images/Backup and Restore.png";
import actifioIcon from "../../Images/actifio-logo.png";
import awsIcon from "../../Images/amazon-aws.svg";
import illustratorIcon from "../../Images/adobe-illustrator.svg";

function Skills({ translate }) {
  let skills = [
    {
      text: "HTML",
      icon: htmlIcon,
      skillDescription: "https://html.spec.whatwg.org/",
      transKey: "skill.skill1",
    },
    {
      text: "CSS",
      icon: cssIcon,
      skillDescription: "https://www.w3.org/Style/CSS/Overview.en.html",
      transKey: "skill.skill2",
    },
    {
      text: "JavaScript",
      icon: jsIcon,
      skillDescription: "https://zh.wikipedia.org/wiki/w:JavaScript",
      transKey: "skill.skill3",
    },
    {
      text: "ReactJS",
      icon: reactIcon,
      skillDescription: "https://react.dev/",
      transKey: "skill.skill4",
    },
    {
      text: "Redux",
      icon: reduxIcon,
      skillDescription: "https://redux.js.org/",
      transKey: "skill.skill5",
    },
    {
      text: "Bootstrap",
      icon: bootstrapIcon,
      skillDescription: "https://getbootstrap.com/",
      transKey: "skill.skill6",
    },
    {
      text: "Jquery",
      icon: jqueryIcon,
      skillDescription: "https://jquery.com/",
      transKey: "skill.skill7",
    },
    {
      text: "MaterialUI",
      icon: materialIcon,
      skillDescription:
        "https://mui.com/material-ui/?srsltid=AfmBOoqRqU8V7p1J5TC6S_AufvJdaLGYEHF7pixLTqUOelmH6QCCm8KR",
      transKey: "skill.skill8",
    },
    {
      text: "ExpressJS",
      icon: expressIcon,
      skillDescription: "https://expressjs.com/",
      transKey: "skill.skill9",
    },
    {
      text: "NodeJS",
      icon: nodeIcon,
      skillDescription: "https://nodejs.org/en",
      transKey: "skill.skill10",
    },
    {
      text: "MongoDB",
      icon: mongoIcon,
      skillDescription: "https://www.mongodb.com/",
      transKey: "skill.skill11",
    },
    {
      text: "Amazon Web Services",
      icon: awsIcon,
      skillDescription: "https://aws.amazon.com/",
      transKey: "skill.skill12",
    },
    {
      text: "Adobe Experience Manager (Content Management System)",
      icon: adobeIcon,
      skillDescription:
        "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html",
      transKey: "skill.skill13",
    },
    {
      text: "Actifio (Enterprise Cloud Data Management)",
      icon: actifioIcon,
      skillDescription: "https://www.actifio.com/",
      transKey: "skill.skill14",
    },
    {
      text: "Networking (Cisco)",
      icon: networkIcon,
      skillDescription: "https://en.wikipedia.org/wiki/Computer_network",
      transKey: "skill.skill15",
    },
    {
      text: "Backup & Restore",
      icon: backupIcon,
      skillDescription: "https://www.ibm.com/think/topics/backup-and-restore",
      transKey: "skill.skill16",
    },
    {
      text: "Adobe Illustrator",
      icon: illustratorIcon,
      skillDescription: "https://www.adobe.com/products/illustrator.html",
      transKey: "skill.skill17",
    },
  ];

  //combining the text from above object using reducer to add to marquee
  const [combinedText, setCombinedText] = React.useState(
    skills.reduce((combined, obj) => {
      return combined + " • " + obj.text;
    }, "")
  );

  return (
    <section id="skills">
      <SectionTitle
        mainText={translate("skill.mainTitle")}
        subText={translate("skill.subTitle")}
        type={"1"}
      />
      <div className={`container technical`}>
        {skills.map(({ text, icon, skillDescription, transKey }, index) => {
          return (
            <div
              key={`${text}-${index}`}
              className={`tile tile-${text.toLowerCase()}`}
            >
              <img src={icon} alt={text} className="icon" />
              <div
                className="text"
                onClick={() => {
                  window.open(skillDescription);
                }}
              >
                {translate(transKey)}
              </div>
            </div>
          );
        })}
      </div>
      <Marquee content={combinedText} />
    </section>
  );
}

export default Skills;
