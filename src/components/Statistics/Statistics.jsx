import styles from "./Statistics.module.css";
import React from "react";
import PropTypes from 'prop-types';

const Statistics = (props) => {
  return (
    <ul className={styles.data_wrapper}>
      <li className={styles.data_headline}>
        Good: <span className={styles.data_value}>{props.good}</span>
      </li>
      <li className={styles.data_headline}>
        Neutral: <span className={styles.data_value}>{props.neutral}</span>
      </li>
      <li className={styles.data_headline}>
        Bad: <span className={styles.data_value}>{props.bad}</span>
      </li>
      <li className={styles.data_headline}>
        Total: <span className={styles.data_value}>{props.total}</span>
      </li>
      <li className={styles.data_headline}>
        Positive feedback: <span className={styles.data_value}>{props.positivePercentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
