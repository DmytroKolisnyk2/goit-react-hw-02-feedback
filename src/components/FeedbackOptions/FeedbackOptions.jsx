import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btn_wrapper}>
      {options.map((item) => (
        <button key={item} onClick={() => onLeaveFeedback(item)} type="button" className={styles.btn}>
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;
