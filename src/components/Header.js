import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = (props) => {
  if(props.signIn){

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Books
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
            Home
        </Link>
        <Link to="/books/favorite" className="item">
            Favorite Books
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
  }else{
    
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        Books
      </div>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
  }
};

export default Header;
