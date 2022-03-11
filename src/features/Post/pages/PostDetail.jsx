import htmlToReact from 'html-to-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../services/post';
import useTitle from '../../../store/hooks/useTitle';

function PostDetail(props) {
  const [currentTitle, updateTitle, updatePageTitle] = useTitle("");
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(params.postId, setPost);
  }, []);

  useEffect(() => {
    if (post?.title) {
      updatePageTitle(post.title);
    }
  }, [post]);

  const contentDOM = htmlToReact.Parser().parse(post?.content);

  return (
   post &&
   <div>
    <h1>{post.title}</h1>
    {contentDOM}
  </div>
  );
}

export default PostDetail;