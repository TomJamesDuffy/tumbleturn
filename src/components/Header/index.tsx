import * as React from 'react';
import classNames from 'classnames';
import { func } from 'prop-types';

import styles from './Header.module.css';

export default function Header({ title }:{title:any}) {
  return (
    <div className={classNames(styles.Header)}>
      <p>{title}</p>
    </div>
  );
}

Header.propType = {
  setMins: func,
};
