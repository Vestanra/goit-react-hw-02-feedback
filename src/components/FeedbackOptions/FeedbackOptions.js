import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ul>
        {options.map(el => <li key={nanoid()}><button type="button" onClick={onLeaveFeedback} name={el}>{el}</button></li>)}
        </ul>
    );
}