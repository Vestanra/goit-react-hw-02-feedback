import PropTypes from 'prop-types';
import { StatisticsWrapper, Positive } from './Statistics.styled';

export const Statistics = ({ statistics: {good, neutral, bad}, positive, total }) => {
    return (
        <div>
        <h2>Statistics</h2>
        <StatisticsWrapper>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <Positive>Positive feedback: {positive} %</Positive>
        </StatisticsWrapper>
       </div>
    )
}

Statistics.propTypes = {
    statistics: PropTypes.shape({
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }),
    positive: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}

        
