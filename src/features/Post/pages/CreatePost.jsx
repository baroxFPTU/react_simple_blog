import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postApi from '../../../api/postApi';
import useTitle from '../../../store/hooks/useTitle';
import PostEditor from '../components/PostEditor';
import classes from './CreatePost.module.scss';

function CreatPost(props) {
  const [currentTitle, updateTitle] = useTitle("Create new post");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const showPostRef = useRef(null);

  useEffect(() => {
    showPostRef.current.innerHTML = `<h1>${title}</h1><br/><p><strong>${description}</strong></p>${value}`;
  }, [value, title, description]);

  const updateTitleHandler = (event) => {
    const newTitle = event.target.value;
    updateTitle(newTitle);
    setTitle(newTitle);
  }

  const submitPostHandler = async () => {
    if (!title || !value || !description) return;
    const newPost = {
      id: Date.now(),
      title,
      content: value,
      description,
      author: user.name,
      uid: user.id
    }

    const response = await postApi.createPost(newPost);
    if (response) {
      navigate("/");
    }
  }

  return (
    <div>
      <input className={classes.input + ' ' + classes.inputTitle} type="text" placeholder="Enter your title..." value={title} onChange={updateTitleHandler}/>
      <input className={classes.input} type="text" placeholder="Enter description..." value={description} onChange={(e) => setDescription(e.target.value)}/>
      <PostEditor value={value} onChange={setValue}/>
      <button onClick={submitPostHandler}>Post</button>
      <div ref={showPostRef}></div>
    </div>
  );
}

export default CreatPost;