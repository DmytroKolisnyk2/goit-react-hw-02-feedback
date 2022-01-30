import React, { Component } from "react";

import Statistics from "./Statistics/Statistics.jsx";
import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    `${Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0}%`;

  isFeedback = () => this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0;

  render() {
    const { good, neutral, bad } = this.state;
    const statisticData = {
      Good: good,
      Neutral: neutral,
      Bad: bad,
      Total: this.countTotalFeedback(),
      "Positive percentage": this.countPositiveFeedbackPercentage(),
    };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>
        <Section title="Statistics">
          {this.isFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics statisticData={statisticData} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
