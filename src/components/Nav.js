import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

// We are rendering our navigation module which will be displayed on most pages
function Nav() {
  return (
    <section id="navigation">
    <ul>    
        <Link to='/'>
            <li><a className="active">Home</a></li>
        </Link>
        <Link to='/upcoming'>
            <li><a>Upcoming</a></li>
        </Link>
        <Link to='/top'>
            <li><a>Top Rated</a></li>
        </Link>
        <Link to='/'>
        <li id="logo">M</li>
        </Link>
        <Link to='/'>
            <li><a>Tv Shows</a></li>
        </Link>
        <Link to='/'>
            <li><a>Games</a></li>
        </Link>
        <Link to='/'>
            <li><a>More</a></li>
        </Link>
    </ul>
    </section>
  );
}

export default Nav;


    
