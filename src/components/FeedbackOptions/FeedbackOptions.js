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


// import PropTypes from 'prop-types';

// const FeedbackOptions = ({options, onLeaveFeedback}) => {
//     return (
//       <div className={css.buttonsList}>
//         {options.map( name => (
//           <button 
//             // type="button"
//             key={name}
//             onClick={ () => onLeaveFeedback(name) }
//           >{name}
//           </button>
//         ))}
//       </div>
//     )
//     }

//     FeedbackOptions.propTypes = {
//       options: PropTypes.arrayOf(
//           PropTypes.string.isRequired).isRequired,
//       onLeaveFeedback: PropTypes.func.isRequired
//   };

// export default FeedbackOptions;



