import * as React from 'react';
import classNames from 'classnames';

import styles from './Panel.module.css';

export default function Panel({ panel }) {
  const { totalDistance, breakdown } = panel || {};
  return (
    <div className={classNames(styles.Panel, 'BoxShadow')}>
      <div className={styles.TotalDistance}>
        {totalDistance}
        m
      </div>
      <div>
        {breakdown
          && breakdown.map((interval) => {
            const { description, intensity, time } = interval || {};
            return (
              <div className={styles.Intervals}>
                <div className={styles.Description}>{description}</div>
                <div className={styles.Intensity}>{intensity}</div>
                <div className={styles.Time}>{time}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
