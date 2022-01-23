import React from 'react';
import classNames from 'classnames';

import Set from '../Set';

import styles from './Schedule.module.css';

export default function Schedule({ session }) {
  return (
    <div className={classNames(styles.Schedule, 'BoxShadow')}>
      {session
        && session.map((set) => {
          const { panels, backgroundColor } = set || {};
          return (
            <Set panels={panels} backgroundColor={backgroundColor} />
          );
        })}
    </div>
  );
}
