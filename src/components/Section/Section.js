import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Notification } from "../Notification/Notification";

export const Section = ({ options, title, onLeaveFeedback, statistics, positive, total, message }) => {
    return (
        <div>
            <h1>{title}</h1>
            <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options}></FeedbackOptions>
            {total > 0 ?  <Statistics statistics={statistics} total={total} positive={positive}></Statistics> : <Notification message={message}></Notification>}
           
        </div>
    )
}