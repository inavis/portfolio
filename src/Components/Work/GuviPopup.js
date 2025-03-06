function GuviPopup() {
  return (
    <div className="d-flex work-popup guvi-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          September 2021 to March 2022
        </p>
        <h3 className="text-left role text-crossmint-green">
          Full Stack Developer | Student Trainee
        </h3>
        <h3 className="text-left company">
          <a
            href="https://www.guvi.in/"
            target="_blank"
            className="text-crossmint-green"
          >
            Guvi Geeks
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left text-light-navy">
            <span className="text-white">Tech Stack:</span>
            <br />
            HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, ExpressJS
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
              <p className="text-left text-light-navy">
                Display Movies website
                <a
                  href="https://movie-details-react-try.netlify.app"
                  target="_blank"
                  className="text-light-navy"
                >
                  https://movie-details-react-try.netlify.app
                </a>
              </p>
              <p className="text-left text-light-navy">
                Thirukural website{" "}
                <a
                  href="https://thirukural-tamil-english.netlify.app"
                  target="_blank"
                  className="text-light-navy"
                >
                  https://thirukural-tamil-english.netlify.app
                </a>
              </p>
              <p className="text-left text-light-navy">
                Get Logo from website name{" "}
                <a
                  href="https://icon-from-website.netlify.app"
                  target="_blank"
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
                  className="text-light-navy"
                >
                  https://gif-generator-giphy.netlify.app
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">Responsibilities:</h4>
          <p className="text-left text-light-navy">
            • Trained on Project based Full Stack Development Program in MERN
          </p>
          <p className="text-left text-light-navy">
            • Deeper understanding of Client Side Programming by developing
            highly responsive web pages
          </p>
          <p className="text-left text-light-navy">
            • Designing back end development by building multi-user web
            applications using NodeJS framework and MongoDb
          </p>
          <p className="text-left text-light-navy">
            • Knowledge on developer tools such as Git and deploying web
            applications onto web servers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuviPopup;
