import styles from "./Statistics.module.css";
import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ statisticData }) => {
  return (
    <ul className={styles.data_wrapper}>
      {Object.keys(statisticData).map((item) => (
        <li key={item} className={styles.data_headline}>
          {item}: <span className={styles.data_value}>{statisticData[item]}</span>
        </li>
      ))}
      {/* <li className={styles.data_headline}>
        Good: <span className={styles.data_value}>{good}</span>
      </li>
      <li className={styles.data_headline}>
        Neutral: <span className={styles.data_value}>{neutral}</span>
      </li>
      <li className={styles.data_headline}>
        Bad: <span className={styles.data_value}>{bad}</span>
      </li>
      <li className={styles.data_headline}>
        Total: <span className={styles.data_value}>{total}</span>
      </li>
      <li className={styles.data_headline}>
        Positive feedback: <span className={styles.data_value}>{positivePercentage}</span>
      </li> */}
    </ul>
  );
};

Statistics.propTypes = {
  statisticData: PropTypes.object.isRequired,
};

export default Statistics;
