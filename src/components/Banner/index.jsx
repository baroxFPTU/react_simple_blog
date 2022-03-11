import React from 'react';
import classes from './Banner.module.scss';

function Banner({title}) {
  return (
    <div className={classes.banner}>
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;