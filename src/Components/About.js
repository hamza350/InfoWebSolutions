import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Us</h2>

            <p>We have teams of dedicated and highly talented engineers with an interestingly proficient mix of professional backgrounds enabling our clients to fortify their models and to take their business to new heights.We offer advanced solutions for Web and Mobile apps, Web Design, Customization, Support and Maintenance</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    Muhammadi Street Qainchi 
                    <br />
                    Lahore Punjab, 54000
                  </span>
                  <br />
                  <span>03070112487</span>
                  <br />
                  <span>hamzabhatti9922@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
