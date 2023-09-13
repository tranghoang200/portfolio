import React from "react";
import myImage from "../img/myImage.jpg";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <img style={{ width: "13em", height: "13em", borderRadius: "100em" }} className="profile-pic" src={myImage} alt="Profile Pic" />

                  </div>
                  <div className="col-md-9">
                    <h2>About Me</h2>

                    <p>With a dynamic professional background, I bring valuable experience from software engineer roles at Microsoft Corporation, FPT Software, and the Augustana Web Guild. I am passionate about how the software works, and I love building applications for Mobile and Websites.</p>
                    <p>My specialties include quickly learn new skills, problem-solving, and programming languages. I am always curious about software and eager to learn new frameworks, principles using in web development or mobile development.</p>

                    <h2>Skills</h2>
                    <span style={{ marginRight: 20, marginBottom: 10, padding: 10 }} class="badge badge-pill badge-primary">Java</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">JavaScript</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">TypeScript</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Python</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">HTML</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">CSS</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">SQL</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">C#</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Git</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Github</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Agile</span>
                    <span style={{ marginRight: 20, marginBottom: 10, padding: 10 }} class="badge badge-pill badge-primary">Eclipse</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">VSC</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">NodeJS</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">MongoDB</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">MySQL</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">AWS</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Spring</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Junit</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">React</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">React Native</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">Android</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">VueJS</span>
                    <span style={{ marginRight: 20, padding: 10 }} class="badge badge-pill badge-primary">jQuery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
