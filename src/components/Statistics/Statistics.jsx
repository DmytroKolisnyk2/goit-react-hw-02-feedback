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
    </ul>
  );
};

Statistics.propTypes = {
  statisticData: PropTypes.object.isRequired,
};

export default Statistics;
