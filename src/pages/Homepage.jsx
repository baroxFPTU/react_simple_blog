import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../features/Post/components/PostList';
import { transformArray } from '../helpers/response';
import { getAllPost } from '../services/post';
import useTitle from '../store/hooks/useTitle';
import { updatePosts } from '../store/slices/postSlice';

function Homepage(props) {
  const dispatch = useDispatch();
  const [currentTitle] = useTitle("Homepage");
  const listPost = useSelector(state => state.post);

  useEffect(() => {
    getAllPost((data) => {
      if (!data) return;
      const transformedData = transformArray(data);
      const action = updatePosts(transformedData);
      dispatch(action);
    });
  }, []);

  return (
    <div style={{margin: '5rem 0'}}>
        <PostList data={listPost} />
    </div>
  );
}

export default Homepage;