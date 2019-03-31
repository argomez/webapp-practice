import React from 'react';
import classes from './Loading.module.scss';

const Loading = () => (
  <div className={classes.loadingOverlay}>
    <div className={classes.loadingMessage}> Loading.. </div>
  </div>
);

export default Loading;