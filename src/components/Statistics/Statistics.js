
export const Statistics = ({ statistics: {good, neutral, bad}, positive, total }) => {
    return (
        <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positive} %</li>
        </ul>
       </div>
    )
}

        
