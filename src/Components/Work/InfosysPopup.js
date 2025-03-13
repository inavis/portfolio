function InfosysPopup({ translate }) {
  return (
    <div className="d-flex work-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          {translate("work.infy.popup.date")}
        </p>
        <h3 className="text-left role text-crossmint-green">
          {translate("work.infy.popup.title")}
        </h3>
        <h3 className="text-left company">
          <a
            href="https://infosysmysore.in/"
            target="_blank"
            rel="noreferrer"
            className="text-crossmint-green"
          >
            {translate("work.infy.name")}
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left text-white">
            <br />
            {translate("work.infy.popup.tech.title")}:
            <br />
            {translate("work.infy.popup.tech.skills")}
          </p>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">
            {translate("work.infy.popup.responsibility.title")}:
          </h4>
          <p className="text-left text-light-navy">
            • {translate("work.infy.popup.responsibility.res1")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.infy.popup.responsibility.res2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfosysPopup;
