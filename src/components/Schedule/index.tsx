import * as React from 'react';
import classNames from 'classnames';

import WarmUp from '../WarmUp';
import Set from '../Set';
import Cooldown from '../CoolDown';

import styles from './Schedule.module.css';

export default function Schedule() {
  return (
    <div className={classNames(styles.Schedule, 'BoxShadow')}>
      <WarmUp />
      <Set />
      <Cooldown />
    </div>
  );
}
