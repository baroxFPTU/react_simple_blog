import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function Protected(props) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return <Navigate to="/sign-in"/>;
  } 

  return <Outlet/>
}

export default Protected;