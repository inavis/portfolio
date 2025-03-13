function BrillioPopup({ translate }) {
  return (
    <div className="d-flex work-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          {translate("work.brillio.popup.date")}
        </p>
        <h3 className="text-left role text-crossmint-green">
          {translate("work.brillio.popup.title")}
        </h3>
        <h3 className="text-left company">
          <a
            href="https://www.brillio.com/"
            target="_blank"
            rel="noreferrer"
            className="text-crossmint-green"
          >
            {translate("work.brillio.name")}
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left  text-light-navy projects">
            <span className="text-white">
              {translate("work.brillio.popup.text1")}
            </span>{" "}
            {translate("work.brillio.popup.text2")}{" "}
            <div className="project-list">
              <a
                className="text-white"
                href="https://www.bromsite.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>Bromsite </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.cequa.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>Cequa </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.cequapro.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>CequaPro </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.levulan.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>levulan </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.levulanhcp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>levulan hcp </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.ilumya.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>ilumya </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.ilumyapro.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>ilumya pro </nobr>
              </a>
              ,&nbsp;
              <a
                className="text-white"
                href="https://www.odomzo.com/"
                rel="noreferrer"
                target="_blank"
              >
                <nobr>Odomzo </nobr>
              </a>
            </div>
            {translate("work.brillio.popup.text3")}{" "}
            <span className="text-crossmint-green">Sun Pharma</span>.
          </p>
          <p className="text-left text-white">
            <br />
            {translate("work.brillio.popup.tech.title")}
            <br />
            {translate("work.brillio.popup.tech.skills")}
          </p>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">
            {translate("work.brillio.popup.responsibility.title")}:
          </h4>
          <p className="text-left text-light-navy">
            • {translate("work.brillio.popup.responsibility.res1")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.brillio.popup.responsibility.res2")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.brillio.popup.responsibility.res3")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.brillio.popup.responsibility.res4")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.brillio.popup.responsibility.res5")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BrillioPopup;
