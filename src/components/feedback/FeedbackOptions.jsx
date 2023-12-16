import './feedback.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackBtns = options.map(option => {
    return (
      <>
        <button
          className="state-btn-item"
          key={options}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </>
    );
  });
  return <>{feedbackBtns}</>;
};

export default FeedbackOptions;
