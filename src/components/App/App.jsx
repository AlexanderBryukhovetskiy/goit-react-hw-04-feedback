import { useState }  from "react";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";
import css from "./App.module.css";

export default function App () {

	const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedBack = good + neutral + bad;
  const positivePercent = Math.round( good / totalFeedBack * 100);

	const leaveFeedBack = name => {
	  switch(name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default: 
        return;
    }
	};
    
  return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={leaveFeedBack}
          />
        </Section>
          
        { totalFeedBack > 0 
          ? (<Section title="Statistics">
              <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedBack}
                positivePercentage={positivePercent} 
              />
          </Section>)
          : ( <Notification message="There is no feedback" /> )  
        }
      </div>
  );
}