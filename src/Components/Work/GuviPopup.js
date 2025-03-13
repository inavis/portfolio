function GuviPopup({ translate }) {
  return (
    <div className="d-flex work-popup guvi-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          {translate("work.guvi.popup.date")}
        </p>
        <h3 className="text-left role text-crossmint-green">
          {translate("work.guvi.popup.title")}
        </h3>
        <h3 className="text-left company">
          <a
            href="https://www.guvi.in/"
            target="_blank"
            rel="noreferrer"
            className="text-crossmint-green"
          >
            {translate("work.guvi.name")}
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left text-white">
            {translate("work.guvi.popup.tech.title")}:
            <br />
            {translate("work.guvi.popup.tech.skills")}
            <br />
          </p>
        </div>
        <div>
          <div className="text-left  text-light-navy projects">
            <p className="text-left text-white">Projects:</p>
            <div>
              <p className="text-left text-light-navy">
                <span className="text-white">For The Love Of Food</span> –
                Website for recipes.
              </p>
              <p className="text-left text-light-navy">
                Deployed Link:{" "}
                <a
                  href="https://for-the-love-of-food.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://for-the-love-of-food.netlify.app/
                </a>
              </p>
              <p className="text-left text-light-navy">
                Source code :{" "}
                <a
                  href="https://github.com/inavis/receipe-crud-mockapi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://github.com/inavis/receipe-crud-mockapi
                </a>
              </p>
              <p className="text-left text-light-navy">
                A website to add and explore recipes built using Reactjs, Nodejs
                and Mongodb. Implemented a complete user management system
                including login, registration and Password reset flow with JWT,
                Bcrypt and by sending OTP to user’s mobile number. Once user has
                signed in they can add, edit, delete and explore recipes.
                Theming (dark mode and light mode) is also available with the
                website.
              </p>
            </div>

            <div>
              <p className="text-left text-white">
                Desktop application using Electron js
              </p>
              <p className="text-left text-light-navy">
                Source code :{" "}
                <a
                  href="https://github.com/inavis/video-converter-electron"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://github.com/inavis/video-converter-electron
                </a>
              </p>
              <p className="text-left text-light-navy">
                Application to convert mp4 video to hls format using Elctron js
                and FFMPEG plugin.
              </p>
            </div>

            <div>
              <p className="text-left text-white">Others:</p>
              <p>
                Banner on obesity-{" "}
                <a
                  href="https://obesity-banner1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://obesity-banner1.netlify.app/
                </a>
              </p>
              <p className="text-left text-light-navy">
                Display Movies website-{" "}
                <a
                  href="https://movie-details-react-try.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://movie-details-react-try.netlify.app
                </a>
              </p>
              <p className="text-left text-light-navy">
                Thirukural website-{" "}
                <a
                  href="https://thirukural-tamil-english.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://thirukural-tamil-english.netlify.app
                </a>
              </p>
              <p className="text-left text-light-navy">
                Get Logo from website name-{" "}
                <a
                  href="https://icon-from-website.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://icon-from-website.netlify.app
                </a>
              </p>
              <p className="text-left text-light-navy">
                GIF generator{" "}
                <a
                  href="https://gif-generator-giphy.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light-navy"
                >
                  https://gif-generator-giphy.netlify.app
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">
            {translate("work.guvi.popup.responsibility.title")}:
          </h4>
          <p className="text-left text-light-navy">
            • {translate("work.guvi.popup.responsibility.res1")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.guvi.popup.responsibility.res2")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.guvi.popup.responsibility.res3")}
          </p>
          <p className="text-left text-light-navy">
            • {translate("work.guvi.popup.responsibility.res4")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuviPopup;
