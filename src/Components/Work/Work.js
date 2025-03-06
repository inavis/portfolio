import React from "react";
import "./Work.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Popup from "../Popup/Popup";
import { StateContext } from "../../Context";
import { useContext } from "react";
import TCSPopup from "./TCSPopup";
import BrillioPopup from "./BrillioPopup";
import GuviPopup from "./GuviPopup";
import InfosysPopup from "./InfosysPopup";

function Work() {
  let sectionClass = ["all", "professional", "training", "internship"];
  const [activeTab, setActiveTab] = React.useState(1);
  let { popupOpen, openPopup } = useContext(StateContext);
  const [popupData, setPopupData] = React.useState("");
  console.log(popupOpen);

  const handleTab = (index) => {
    setActiveTab(index);
  };

  function ProfessionalData() {
    return (
      <div className="professional-data">
        <div className="tile tile1" onClick={() => setPopupData(BrillioPopup)}>
          <div className="text">
            <h3 className="text-left">Senior Engineer</h3>
            <h4 className="text-left">Brillio Technologies</h4>
          </div>
        </div>
        <div className="tile tile2" onClick={() => setPopupData(TCSPopup)}>
          <div className="text">
            <h3 className="text-right">Engineer</h3>
            <h4 className="text-right">Tata Consultancy Services</h4>
          </div>
        </div>
      </div>
    );
  }

  function TrainingData() {
    return (
      <div className="training-data">
        <div className="tile tile1" onClick={() => setPopupData(GuviPopup)}>
          <div className="text">
            <h3 className="text-right">
              Full Stack <br className="d-block d-lg-none" />
              Developer
              <br />
              (Trainee)
            </h3>
            <h4 className="text-right">Guvi Geeks</h4>
          </div>
        </div>
      </div>
    );
  }

  function InternshipData() {
    return (
      <div className="internship-data">
        <div className="tile tile1" onClick={() => setPopupData(InfosysPopup)}>
          <div className="text">
            <h3 className="text-left">Intern</h3>
            <h4 className="text-left">Infosys</h4>
          </div>
        </div>
      </div>
    );
  }

  function AllData() {
    return (
      <div className="all-data">
        <ProfessionalData />
        <TrainingData />
        <InternshipData />
      </div>
    );
  }

  let tabContent = [
    <AllData />,
    <ProfessionalData />,
    <TrainingData />,
    <InternshipData />,
  ];

  //opening popup only once new popup data is set
  React.useEffect(() => {
    if (popupData !== "") {
      openPopup();
    }
  }, [popupData]);

  return (
    <section id="work">
      <Popup>{popupData}</Popup>
      <SectionTitle
        mainText={"Experience"}
        subText={"All Of My Works"}
        type={"1"}
      />
      <div className="container">
        <div className="tabs">
          {sectionClass.map((text, index) => {
            return (
              <button
                className={`trans-btn tab ${
                  activeTab === index ? "active" : ""
                }`}
                key={`trans-btn-${index}`}
                onClick={() => handleTab(index)}
              >
                {text}
              </button>
            );
          })}
        </div>
        <div className="content">
          {sectionClass.map((text, index) => {
            return (
              <div
                key={`${text}`}
                className={`${text} ${activeTab !== index ? "d-none" : ""}`}
                index={`work-content-${index}`}
              >
                {tabContent[index]}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
