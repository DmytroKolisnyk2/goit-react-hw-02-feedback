import "./App.css";
import React, { Component } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
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
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrease}
          />
        </Section>
        <Section title="Statistics">
          {this.isFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
