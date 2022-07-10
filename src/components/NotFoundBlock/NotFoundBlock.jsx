import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.notf}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Not Found</h1>
        <Link className='link' to='/'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
