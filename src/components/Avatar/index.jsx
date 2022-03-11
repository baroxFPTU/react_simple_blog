import React from 'react';
import PropTypes from 'prop-types';
import classes from './Avatar.module.scss';

Avatar.propTypes = {
  
};

function Avatar({src, alt}) {
  return (
    <div className={classes.avatar}>
      <img src={src || "https://source.unsplash.com/random"} alt={alt} />
    </div>
  );
}

export default Avatar;