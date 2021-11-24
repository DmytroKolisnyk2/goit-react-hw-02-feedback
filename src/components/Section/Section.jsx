import React from "react";
import styles from "./Section.module.css";
import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <section className={styles.statistic}>
      <h2 className={styles.headline}>{props.title}</h2>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
export default Section;
