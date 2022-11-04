import React, { Component } from "react";
import uuid from "react-uuid";
import { Underline } from "../design"

import "./style.css";

class Mobile extends Component {
  state = {
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  }

  componentDidMount(props) {
    this.setState({
      cards: this.props.data,
    })
  }

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
                <a href={card.url} target="_blank">
                  <div
                    key={uuid()}
                    className="portfolio-card"
                  >
                    <img
                      src={card.name}
                      alt="project"
                      rel="noopener noreferrer"
                    />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Mobile;
