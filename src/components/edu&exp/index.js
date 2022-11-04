import React, { Component } from "react";
import { Underline } from "../design";
import "./style.css";

class EduExp extends Component {
  state = {
    education: [
      {
        stream: "B.E In Electrical",
        median: " Sona College of Technology",
        duration: "June 2012 - April 2015",
      },
      {
        stream: " Diploma In Electrical",
        median: " Paavai Polytechnic College",
        duration: "June 2009 - April 2012",
      },
    ],
    experience: [
      {
        stream: " Sr.Quality & Production  Supervisor",
        median:
          "Larsen & Toubro ELECTRICAL AUTOMATION(Contract), Coimbatore",
        duration: "March 2016 - Present",
        showContext: false,
      },
      {
        stream: " Ui/Ux Engineer",
        median: "Freelancing",
        duration: "October 2021 - present",
        showContext: false,
      },
    ],
  }

  handleContext = (index) => {
    let experience = [...this.state.experience]
    experience[index].showContext =
      !experience[index].showContext
    this.setState({
      experience,
    })
  }
  render() {
    return (
      <div className="edu-exp-container">
        <div className="content">
          <div className="title">
            <p>Experience..</p>
            <Underline />
          </div>
          {this.state.experience.map(
            (experience, index) => (
              <div className="card">
                <div className="section">
                  <div className="stream-median">
                    <p className="stream">
                      {experience.stream}
                    </p>
                    <p className="median">
                      {experience.median}
                    </p>
                  </div>
                  <p className="duration">
                    <i class="bi bi-calendar-date"></i>
                    <span>{experience.duration}</span>
                  </p>
                </div>
                {/* <div className="more-details-section"> */}
                {/* {!experience.showContext ? (
                  <p
                    className="link"
                    onClick={() =>
                      this.handleContext(index)
                    }
                  >
                    <span>More details </span>
                    <i class="bi bi-chevron-down"></i>
                  </p>
                ) : (
                  <p
                    className="link"
                    onClick={() =>
                      this.handleContext(index)
                    }
                  >
                    <span>Less details </span>
                    <i class="bi bi-chevron-up"></i>
                  </p>
                )}
                <p
                  className={
                    experience.showContext
                      ? "context"
                      : "hide"
                  }
                >
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                  It has survived not only five centuries,
                  but also the leap into electronic
                  typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more
                  recently with desktop publishing software.
                </p> */}
                {/* </div> */}
              </div>
            )
          )}
        </div>
        <div className="content">
          <div className="title">
            <p>Education..</p>
            <Underline />
          </div>
          {this.state.education.map((education, index) => (
            <div className="card">
              <div className="section">
                <div className="stream-median">
                  <p className="stream">
                    {education.stream}
                  </p>
                  <p className="median">
                    {education.median}
                  </p>
                </div>
                <p className="duration">
                  <i class="bi bi-calendar-date"></i>
                  <span>{education.duration}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default EduExp