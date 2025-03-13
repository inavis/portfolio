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

function Work({ translate }) {
  let sectionClassKey = ["work.tab1", "work.tab2", "work.tab3", "work.tab4"];
  const [activeTab, setActiveTab] = React.useState(1);
  let { popupOpen, openPopup } = useContext(StateContext);
  const [popupData, setPopupData] = React.useState("");

  const handleTab = (index) => {
    setActiveTab(index);
  };

  function ProfessionalData() {
    return (
      <div className="professional-data">
        <div
          className="tile tile1"
          onClick={() => setPopupData(<BrillioPopup translate={translate} />)}
        >
          <div className="text">
            <h3 className="text-left">
              {translate("work.brillio.designation")}
            </h3>
            <h4 className="text-left">{translate("work.brillio.name")}</h4>
          </div>
        </div>
        <div
          className="tile tile2"
          onClick={() => setPopupData(<TCSPopup translate={translate} />)}
        >
          <div className="text">
            <h3 className="text-right">{translate("work.tcs.designation")}</h3>
            <h4 className="text-right">{translate("work.tcs.name")}</h4>
          </div>
        </div>
      </div>
    );
  }

  function TrainingData() {
    return (
      <div className="training-data">
        <div
          className="tile tile1"
          onClick={() => setPopupData(<GuviPopup translate={translate} />)}
        >
          <div className="text">
            <h3
              className="text-right"
              dangerouslySetInnerHTML={{
                __html: translate("work.guvi.designation"),
              }}
            ></h3>
            <h4 className="text-right">{translate("work.guvi.name")}</h4>
          </div>
        </div>
      </div>
    );
  }

  function InternshipData() {
    return (
      <div className="internship-data">
        <div
          className="tile tile1"
          onClick={() => setPopupData(<InfosysPopup translate={translate} />)}
        >
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
        mainText={translate("work.mainTitle")}
        subText={translate("work.subTitle")}
        type={"1"}
      />
      <div className="container">
        <div className="tabs">
          {sectionClassKey.map((text, index) => {
            return (
              <button
                className={`trans-btn tab ${
                  activeTab === index ? "active" : ""
                }`}
                key={`trans-btn-${index}`}
                onClick={() => handleTab(index)}
              >
                {translate(text)}
              </button>
            );
          })}
        </div>
        <div className="content">
          {sectionClassKey.map((text, index) => {
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
          <p className="text-white font-16">{translate("work.disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}

export default Work;
