import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ButtonWrapper>
            {options.map(el =>
                <li key={nanoid()}>
                    <Button type="button" onClick={onLeaveFeedback} name={el}>{el}</Button>
                </li>)}
        </ButtonWrapper>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}