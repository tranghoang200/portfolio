import React from "react";

//import stock
import stock1 from "../img/image2.PNG";
import stock2 from "../img/image3.PNG";
import stock3 from "../img/image4.PNG";
import stock5 from "../img/image6.PNG";
import stock6 from "../img/image1.PNG";
import stock7 from "../img/image7.PNG";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="title-box text-center">
                <h3 className="title-a">Web Project</h3>
                <p className="subtitle-a">
                  Most my experince with building websites is from my work experince. Here are some of my side web project
                </p>
                <div className="line-mf"></div>
              </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <a href={"https://cvguided.com/"} >
                  <div className="work-img">
                    <img src={stock7} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">CV Guided</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React Redux Firebase Bootstrap
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={"https://github.com/tranghoang200/CoronaGuru"} >
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">CoronaGuru</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap JavaScript AI MongoDB 
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={"https://github.com/MrOhno/duocode/tree/master"}>
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Duocode</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript NodeJS React Firebase MongoDB
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="title-box text-center col-md-12">
                <h4 className="title-a">Mobile Project</h4>
                <p className="subtitle-a">
                  Here are some of my android app and cross-platform app.
                </p>
                <div className="line-mf"></div>
              </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"https://github.com/2ksoft/realty-analysis"} >
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Estalysis App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React Native JavaScript Python Flask MongoDB NodeJS GoogleAPI Firebase
                          </span>

                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"https://github.com/tranghoang200/Message-App"} >
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Message App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React Native  
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>            
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={"https://github.com/tranghoang200/smart_finance"}>
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Smart Finance App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Android Firebase NoSQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
