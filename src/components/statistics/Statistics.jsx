import React from 'react';
import './Statistics.css';
import NotificationMessage from '../notification-message/notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statisticsList = (
    <ul className="state-list-result">
      <li className="state-result-item">Good: {good} </li>
      <li className="state-result-item">Neutral: {neutral} </li>
      <li className="state-result-item">Bad: {bad} </li>
      <li className="state-result-item">Total: {total} </li>
      <li className="state-result-item">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
return <>{statisticsList}</>
  // return <>{total ? statisticsList : <NotificationMessage message="There is no feedback" />}</>;
};

export default Statistics;
