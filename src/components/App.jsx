import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/section';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const handleClick = e => {
    const { textContent } = e.target;
    updateState[textContent](prev => prev + 1);
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = (total, positive) => {
    const percnet = (positive / total) * 100;
    return percnet.toFixed(0);
  };
  return (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Section title="Please leave feedback"></Section>
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        handleClick={handleClick}
      ></FeedbackOptions>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage(
            countTotalFeedback(),
            good
          )}
        />
      </Section>
    </div>
  );
};
