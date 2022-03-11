import React from 'react';
import useTitle from '../../../store/hooks/useTitle';

function Posts(props) {
  const [currentTitle] = useTitle("Posts");

  return (
    <div>
      <h3>Page of posts</h3>
    </div>
  );
}

export default Posts;