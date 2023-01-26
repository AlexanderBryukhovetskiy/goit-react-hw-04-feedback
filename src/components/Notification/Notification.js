import React from "react";
import css from './Notification.module.css';


export default function Notification ({message}) {
  return (
    <h2 className={css.message}>{message}</h2>
  )
};

// import PropTypes from "prop-types";
// const Notification = ({ message }) => {
//   return (
//     <h2 className={css.message}>{message}</h2>
//   )
// };

// Notification.propTypes = {
//   message: PropTypes.string.isRequired
// };

// export default Notification;



