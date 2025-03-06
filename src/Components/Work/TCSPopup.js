function TCSPopup() {
  return (
    <div className="d-flex work-popup">
      <div className="section-1">
        <p className="text-left date text-crossmint-green">
          August 2019 to March 2022
        </p>
        <h3 className="text-left role text-crossmint-green">
          Engineer (Frontend and Networking)
        </h3>
        <h3 className="text-left company">
          <a
            href="https://www.tcs.com/"
            target="_blank"
            rel="noreferrer"
            className="text-crossmint-green"
          >
            Tata Consultancy Services
          </a>
        </h3>
      </div>
      <div className="section-2">
        <div>
          <p className="text-left  text-light-navy projects">
            Being part of{" "}
            <span className="text-white">Alliance and Technology Unit</span>{" "}
            works included development of several internal websites, networking
            , Configuring, deployment of Cisco devices, dffferent cloud and
            server environments
          </p>
          <p className="text-left text-light-navy">
            <br />
            <span className="text-white">Tech Stack:</span>
            <br />
            HTML, CSS, Javascript, AWS, Actifio, Opsview, Cisco
          </p>
        </div>
        <div className="responsibilities">
          <h4 className="text-left text-white">Responsibilities:</h4>
          <p className="text-left text-light-navy">
            • Worked on frontend for multiple sites within the Unit.
          </p>
          <p className="text-left text-light-navy">
            • Achieved five Actifio certifications in backup and restore
            technologies
          </p>
          <p className="text-left text-light-navy">
            • Deployed Actifio on VMs and cloud platforms like AWS, configuring
            multi-platform backups.
          </p>
          <p className="text-left text-light-navy">
            • Monitored backups, prepared daily reports, and performed
            troubleshooting tasks.
          </p>
          <p className="text-left text-light-navy">
            • Deployed Opsview on Linux VMs, configuring service checks for
            diverse platforms and databases.
          </p>
          <p className="text-left text-light-navy">
            • Set up event handlers to automate service restarts during
            downtime.
          </p>
          <p className="text-left text-light-navy">
            {" "}
            • Completed foundational training in Networking, Switching, and
            Routing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TCSPopup;
