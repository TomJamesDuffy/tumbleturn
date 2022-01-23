import React from 'react';
import classNames from 'classnames';

import Set from '../Set';

import styles from './Schedule.module.css';

export default function Schedule({ session }: { session: any }) {
  interface setType {
    panels: any;
    backgroundColor: string;
    time: string;
  }
  return (
    <div className={classNames(styles.Schedule, 'BoxShadow')}>
      {session
        && session.map(({ panels, backgroundColor }: setType) => (
          <Set panels={panels} backgroundColor={backgroundColor} />
        ))}
    </div>
  );
}
