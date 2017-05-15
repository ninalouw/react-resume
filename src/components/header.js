import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import Main from './main';
// import About from './about';
// import Skills from './skills';
// import Projects from './projects';
// import Contact from './contact';

const Header = () => (
      <div>
        <ul className="navbar">
              <li className="navbar-li"><Link className=" active navbar-a" to='/'> NML</Link></li>

              <li className="navbar-li"><Link className="navbar-a" to='/about'>About</Link></li>

              <li className="navbar-li"><Link className="navbar-a" to='/skills'>Skills</Link></li>

              <li className="navbar-li"><Link className="navbar-a" to='/projects'>Projects</Link></li>

              <li className="navbar-li"><Link className="navbar-a" to='/contact'>Contact</Link></li>
          </ul>
        </div>
);

export default Header;
