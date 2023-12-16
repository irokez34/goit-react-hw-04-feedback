import { useEffect, useState } from 'react';
import Section from './section/section';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'bad', 'neutral'];
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const feedBackUpdate = ({ target }) => {};
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
      <Section title="Please leave feedback">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
        ></div>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={feedBackUpdate}
        ></FeedbackOptions>
      </Section>
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

    // <div
    //   style={{
    //     width: '300px',
    //     margin: '150px auto',
    //     display: 'flex',
    //     gap: '15px',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100px',
    //     backgroundColor: 'red',
    //   }}
    // >
    //   <button
    //     style={{
    //       display: 'block',
    //       width: '20%',
    //     }}
    //     onClick={feedBackUpdate}
    //   >
    //     good
    //   </button>
    //   <button
    //     style={{
    //       display: 'block',
    //       width: '20%',
    //     }}
    //     onClick={feedBackUpdate}
    //   >
    //     neutral
    //   </button>
    //   <button
    //     style={{
    //       display: 'block',
    //       width: '20%',
    //     }}
    //     onClick={feedBackUpdate}
    //   >
    //     bad
    //   </button>
    // </div>
  );
};

export default App;

// import Statistics from './statistics/Statistics';
// import FeedbackOptions from './feedback/FeedbackOptions';
// import Section from './section/section';
// import React from 'react';
// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   feedBackUpdate = ({ target }) => {
//     this.setState(prevState => {
//       return {
//         [target.textContent]: prevState[target.textContent] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.bad + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = (total, positive) => {
//     const percnet = (positive / total) * 100;
//     return percnet.toFixed(0);
//   };

//   render() {
//     return (
//       <div
//         style={{
//           width: '300px',
//           margin: '0 auto',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '20px',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.feedBackUpdate}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage(
//               this.countTotalFeedback(),
//               this.state.good
//             )}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
