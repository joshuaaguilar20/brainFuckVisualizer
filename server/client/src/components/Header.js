import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Brainfuck Interpreter
      </Link>
      <div className="right menu">
        <a href="https://www.meetkaruna.com/" className="item">
          Karuna HealthCare
        </a>
      </div>
    </div>
  );
};

export default Header;
