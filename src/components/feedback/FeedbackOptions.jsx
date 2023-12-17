import './feedback.css';

const FeedbackOptions = ({ options, handleClick }) => {
  const feedbackBtns = options.map(option => {
    return (
      <>
        <button className="state-btn-item" key={option} onClick={handleClick}>
          {option}
        </button>
      </>
    );
  });
  return <>{feedbackBtns}</>;
};

export default FeedbackOptions;
