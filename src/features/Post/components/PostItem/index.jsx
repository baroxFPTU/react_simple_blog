import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import classes from './PostItem.module.scss';

PostItem.propTypes = {  
  data: PropTypes.object
};

PostItem.defaultProps = {
  data: null
}

function PostItem({data}) {
  return (
    <Card className={classes.postCard} style={{borderRadius: '15px', overflow: 'hidden'}}>
      <Link to={`/posts/${data.postId}`}>
        <div className={classes.thumb}>
          <span>{data.title}</span>
        </div>
      </Link>
      {/* <img height="300" src={"https://source.unsplash.com/random"}/> */}
      {/* <CardBody className={classes.cardBody}>
        <CardText>
          {data.description}
        </CardText>
      </CardBody> */}
    </Card>
  );
}

export default PostItem;