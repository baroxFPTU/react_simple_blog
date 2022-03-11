import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import classes from './Header.module.scss';

function Header(props) {
  const authState = useSelector(state => state.auth);
  const {isLoggedIn, user} = authState;

  return (
     <header className={classes.header}>
       <div className={classes.container}>
        <div className={classes.col}>
          <Link to="/">
            <h3>Simple Blog</h3>  
          </Link>
        </div>
        <div className={classes.col}>
          <ul className={classes.navLink}>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/posts/create">Create</Link>
            </li>
            <li>
              {!isLoggedIn && <Link to="/sign-in">Sign In</Link>}
              {isLoggedIn && <Avatar src={user.avatarURL}/>}
            </li>
          </ul>
        </div>
       </div>
     </header>
  );
}

export default Header;