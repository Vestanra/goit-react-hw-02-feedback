import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  clickHandler = (evt) => {
    this.setState(prevState => {
      return { ...prevState, [evt.target.name]: this.state[evt.target.name] + 1}
    })
  }

  countTotalFeedback = () => {
    return (Object.values(this.state)).reduce((total, number) => { return total + number }, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const totalSum = (Object.values(this.state)).reduce((total, number) => { return total + number }, 0);
    return Math.round(this.state.good * 100 / totalSum )
  }
 
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
    <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.clickHandler} options={Object.keys(this.state)}></FeedbackOptions>
          {total > 0 ?  <Statistics statistics={this.state} total={total} positive={positiveFeedback}></Statistics> : <Notification message="There is no feedback"></Notification>}
        </Section>
    </div>
  );
  }
};
