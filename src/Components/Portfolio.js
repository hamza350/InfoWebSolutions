import React, { Component } from "react";
import Zmage from "react-zmage";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const links = ["https://remotemedical.com","https://www.avairy.com","https://getinternetonline.com","https://myjackalope.com/"

    ]
    const projects = this.props.data.projects.map(function(projects) {
      let projectImage = "images/portfolio/" + projects.image;
      let url = projects.url;
      return (
        <a href={url}>
          <div key={id++} className="columns portfolio-item">
            <div className="item-wrap">
              <Zmage alt={projects.title} src={projectImage} />
              <div style={{ textAlign: "center" }}>{projects.title}</div>
            </div>
          </div>
        </a>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
