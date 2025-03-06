import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle
          mainText={"About Me"}
          subText={"Know Me More"}
          type={"1"}
        />
        <div className="text-section">
          <div className="sub1">
            <h3 className="text-left text-white">
              I'm <span className="text-teal">Sivani</span>,
            </h3>
            <p className="text-left text-white">
              Highly motivated React JS Developer interested in building and
              optimizing web applications, with a strong focus on creating
              efficient, reusable components and enhancing user experiences.
            </p>
            <p className="text-left text-white">
              Experienced in collaborating within agile teams, integrating
              RESTful APIs, and employing best practices for performance
              optimization. Passionate about leveraging cutting-edge
              technologies to solve complex problems and deliver high-quality
              solutions.
            </p>
          </div>
          <div className="sub2">
            <ul>
              <li>
                <p className="text-left">Name:</p>
                <p className="text-left">Sivani Sutha Saravanan</p>
              </li>
              <li>
                <p className="text-left">From:</p>
                <p className="text-left">Chennai, TamilNadu, India</p>
              </li>
              <li>
                <p className="text-left">DOB:</p>
                <p className="text-left">22/05/1998</p>
              </li>
              <li>
                <p className="text-left">Hobbies:</p>
                <p className="text-left">
                  Numismatics, Illustration, Badminton
                </p>
              </li>
              <li>
                <p className="text-left">Languages:</p>
                <p className="text-left">
                  English(C2), Tamil(C2), Telugu(spoken), German(A1)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
