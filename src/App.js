import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Protected from './features/Auth/pages/Protected';
import SignIn from './features/Auth/pages/SignIn';
import CreatePost from './features/Post/pages/CreatePost';
import PostDetail from './features/Post/pages/PostDetail';
import Posts from './features/Post/pages/Posts';
import Homepage from './pages/Homepage';
import { signIn } from './store/slices/authSlice';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

initializeApp(config);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth()
    const unRegisterAuthObserve = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      const userInfo = {
        name: user.displayName,
        email: user.email,
        avatarURL: user.photoURL,
        id: user.uid
      }

      const action = signIn(userInfo);
      dispatch(action);
    });

    return () => unRegisterAuthObserve();
  }, []);

  return (
  <>
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route element={<Protected/>}>
          <Route path="/posts">
            <Route path=""  element={<Posts/>}/>
            <Route path="create" element={<CreatePost/>}/>
            <Route path=":postId" element={<PostDetail/>}/>
          </Route>
        </Route>
      </Routes>
    </Layout>
  </>
  );
}

export default App;
