import * as React from 'react';
import classNames from 'classnames';

import Panel from '../Panel/index';

import styles from './Set.module.css';

export default function Set({
  panels,
  backgroundColor,
}: {
  panels: any;
  backgroundColor: any;
}) {
  return (
    <div className={classNames(styles.Set)} style={{ backgroundColor }}>
      {panels && panels.map((panel: { panel: any }) => <Panel panel={panel} />)}
    </div>
  );
}
