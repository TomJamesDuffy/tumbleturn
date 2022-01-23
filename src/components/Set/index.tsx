import * as React from 'react';
import classNames from 'classnames';

import Panel from '../Panel/index';

import styles from './Set.module.css';

export default function Set({ panels, backgroundColor }) {
  return (
    <div className={classNames(styles.Set)} style={{ backgroundColor }}x>
      {panels && panels.map((panel) => <Panel panel={panel} />)}
    </div>
  );
}
