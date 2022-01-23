import * as React from 'react';
import classNames from 'classnames';

import styles from './Panel.module.css';

export default function Panel({ panel }: { panel: any }) {
  interface intervalType {
    description: string;
    intensity: string;
    time: string;
  }
  const { totalDistance, breakdown } = panel || {};
  return (
    <div className={classNames(styles.Panel, 'BoxShadow')}>
      <div className={styles.TotalDistance}>
        {totalDistance}
        m
      </div>
      <div>
        {breakdown
          && breakdown.map(
            ({ description, intensity, time }: intervalType) => (
              <div className={styles.Intervals}>
                <div className={styles.Description}>{description}</div>
                <div className={styles.Intensity}>{intensity}</div>
                <div className={styles.Time}>{time}</div>
              </div>
            ),
          )}
      </div>
    </div>
  );
}
