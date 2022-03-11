import React, { useEffect, useState } from 'react';
import Header from '../Header';
import classes from '../../index.module.scss';
import Banner from '../Banner';
import { useSelector } from 'react-redux';

function Layout(props) {
  const globalState = useSelector(state => state.global);

  return (
    <>
      <Header/>
      <Banner title={globalState.currentTitle}/>
      <div className={classes.container}>
        {props.children}
      </div>      
    </>
  );
}

export default Layout;