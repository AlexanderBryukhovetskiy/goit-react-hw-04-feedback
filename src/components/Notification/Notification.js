import React from "react";
import css from './Notification.module.css';


export default function Notification ({message}) {
  return (
    <h2 className={css.message}>{message}</h2>
  )
};



