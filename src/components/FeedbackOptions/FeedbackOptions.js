import React from "react";
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
  return (
    <div className={css.buttonsList}>
      {options.map( name => (
        <button 
          type="button"
          key={name}
          onClick={ () => onLeaveFeedback(name) }
        >{name}
        </button>
      ))}
    </div>
  )
}