function TCSPopup({ translate }) {
  return (
    <div className="d-flex work-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          {translate("work.tcs.popup.date")}
        </p>
        <h3 className="text-left role text-crossmint-green">
          {translate("work.tcs.popup.title")}
        </h3>
        <h3 className="text-left company">
          <a
            href="https://www.tcs.com/"
            target="_blank"
            rel="noreferrer"
            className="text-crossmint-green"
          >
            {translate("work.tcs.name")}
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left  text-light-navy projects">
            {translate("work.tcs.popup.text1")}{" "}
            <span className="text-white">
              {translate("work.tcs.popup.text2")}
            </span>{" "}
            {translate("work.tcs.popup.text3")}
          </p>
          <p className="text-left text-white">
            <br />
            {translate("work.tcs.popup.tech.title")}
            <br />
            {translate("work.tcs.popup.tech.skills")}
          </p>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">
            {translate("work.tcs.popup.responsibility.title")}:
          </h4>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res1")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res2")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res3")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res4")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res5")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.tcs.popup.responsibility.res6")}
          </p>
          <p className="text-left text-light-navy">
            {" "}
            • {translate("work.tcs.popup.responsibility.res7")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TCSPopup;
