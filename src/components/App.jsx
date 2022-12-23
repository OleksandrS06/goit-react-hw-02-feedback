import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((pr, value) => {
      return pr + value;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed()
      : 0;
  };

  handleBtn = mark => {
    this.setState(prevState => {
      return {
        [mark]: prevState[mark] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <main className="wrapper">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleBtn}
            options={this.state}
          />
        </Section>
        <Section>
          {!this.countTotalFeedback() ? (
            <p>No feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </main>
    );
  }
}
export default App;

//
// ===================================
// до event.target можна достукуватись тільки в синхронному коді,
//   тому щоб використовувати його в асинхронному збережи таргет
//    в змінну
// const target = event.target;
// =======================================
