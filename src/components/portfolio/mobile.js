import React, { Component } from "react";
import uuid from "react-uuid";
import { Underline } from "../design";
import Project from "./../../assets/project.svg";

import "./style.css";

class Mobile extends Component {
  state = {
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  };

  render() {
    return (
      <div className="mobile-container">
        <div className="content">
          <div className="title">
            <p>Portfolio..</p>
            <Underline />
          </div>
          <div className="cards-container">
            {this.state.cards.map((card, index) => {
              return (
                <a href="https://www.figma.com/proto/79CSzFF5LWNMD07o3vBAUw/Chat-App?page-id=0%3A1&node-id=1%3A24&viewport=1093%2C-57%2C0.61&scaling=min-zoom&starting-point-node-id=1%3A24">
                  <div
                    key={uuid()}
                    className="portfolio-card"
                  >
                    <img src={Project} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Mobile;
