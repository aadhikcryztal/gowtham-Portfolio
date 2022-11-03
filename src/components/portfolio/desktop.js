import React, { Component } from "react";
import uuid from "react-uuid";
import { Underline } from "../design";
import Project from "./../../assets/project.svg";
import "./style.css";

class Desktop extends Component {
  state = {
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    lastActiveIndex: 0,
    activeCards: [],
    countRestrictions: 3,
  };

  componentDidMount() {
    let cards = [...this.state.cards];
    let countRestrictions = 3;
    console.log(window.innerWidth);
    if (window.innerWidth <= 1280) {
      countRestrictions = 2;
    }
    this.setState({
      activeCards: cards.splice(0, countRestrictions),
      lastActiveIndex: countRestrictions,
      countRestrictions: countRestrictions,
    });
  }

  handleRightButton = () => {
    let {
      lastActiveIndex,
      cards: [...cards],
      countRestrictions,
    } = this.state;

    let activeCards = [];
    if (
      lastActiveIndex + countRestrictions >=
      this.state.cards.length
    ) {
      activeCards = cards.splice(lastActiveIndex);
      lastActiveIndex = this.state.cards.length;
    } else {
      activeCards = cards.splice(
        lastActiveIndex,
        countRestrictions
      );
      lastActiveIndex += countRestrictions;
    }
    this.setState({
      lastActiveIndex: lastActiveIndex,
      activeCards: activeCards,
    });
  };

  handleLeftButton = () => {
    let {
      lastActiveIndex,
      cards: [...cards],
      countRestrictions,
    } = this.state;

    let activeCards = [];
    if (lastActiveIndex === this.state.cards.length) {
      lastActiveIndex =
        lastActiveIndex -
        (lastActiveIndex % countRestrictions);
    } else {
      lastActiveIndex -= countRestrictions;
    }
    activeCards = cards.splice(
      lastActiveIndex - countRestrictions,
      countRestrictions
    );
    this.setState({
      lastActiveIndex: lastActiveIndex,
      activeCards: activeCards,
    });
  };

  render() {
    return (
      <div className="desktop-container">
        <div className="content">
          <div className="title">
            <p>Portfolio..</p>
            <Underline />
          </div>
          <div className="cards-detail">
            <div className="cards-container">
              {this.state.activeCards.map((card, index) => {
                return (
                  <div
                    key={uuid()}
                    className="portfolio-card"
                  >
                    <img src={Project} />
                  </div>
                );
              })}
            </div>
            <div className="active-cards-details">
              {this.state.lastActiveIndex >
              this.state.countRestrictions ? (
                <div
                  className="icon"
                  onClick={this.handleLeftButton}
                >
                  <i className="bi bi-chevron-left"></i>
                </div>
              ) : (
                ""
              )}

              <p>
                {this.state.lastActiveIndex} of{" "}
                {this.state.cards.length}
              </p>
              {this.state.lastActiveIndex !==
              this.state.cards.length ? (
                <div
                  className="icon"
                  onClick={this.handleRightButton}
                >
                  <i className="bi bi-chevron-right"></i>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
