import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import {Layout} from "./Layout.styled"

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

  findSum = () => {
    return (Object.values(this.state)).reduce((total, number) => { return total + number }, 0);
  }
  
  countTotalFeedback = () => {
    return this.findSum();
  }

  countPositiveFeedbackPercentage = () => {
    const totalSum = this.findSum();
    return Math.round(this.state.good * 100 / totalSum )
  }
 
  render() {
    const { countTotalFeedback, countPositiveFeedbackPercentage, state, clickHandler} = this;

    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();

    return (
    <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={clickHandler}
            options={Object.keys(state)}></FeedbackOptions>
          {total > 0 ?
            <Statistics statistics={state} total={total} positive={positiveFeedback}></Statistics> :
            <Notification message="There is no feedback"></Notification>}
        </Section>
        <GlobalStyle/>
    </Layout>
  );
  }
};
