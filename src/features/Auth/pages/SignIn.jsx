import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../store/hooks/useTitle';

function SignIn(props) {
  const [currentTitle] = useTitle("Sign In");
  const navigate = useNavigate();
  
  const auth =getAuth();
  const googleProvider = new GoogleAuthProvider(auth);

  const signInHandler = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    if (response) {
      navigate(-1);
    }
  }

  return (
    <div>
      <h2>Hello</h2>
      <button onClick={signInHandler}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;  