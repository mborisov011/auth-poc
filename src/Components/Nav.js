import React from 'react';
import AuthenticationButton from "./buttons/AuthenticationButton"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                    <AuthenticationButton />
                </li>
              </ul>
            </nav>
        </div>
    );
}

export default Nav;
