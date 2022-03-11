import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';
import classes from './PostList.module.scss';

PostList.propTypes = {
  data: PropTypes.array
};

PostList.defaultProps = {
  data: []
}

function PostList({data}) {
  return (
    <div className={classes.PostList}>
      {data.map((item, index) => (<PostItem key={index} data={item} />))}
    </div>
  );
}

export default PostList;