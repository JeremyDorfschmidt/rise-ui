var React = require('react');
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import riseLogo from '../../images/rise-logo-black.png';
import SearchBar from './search-bar.js';

var MainNav = React.createClass({
  render:function(){
    return (
      <div className="ri-app-nav-bar">

        <span className="ri-ise-logo">
          <Link to="home"><img src={riseLogo}/></Link>
        </span>

        <div className="ri-nav-menu">
          <Link to="home">Home</Link>
          <Link to="photos">Photos</Link>
          <Link to="products">Products</Link>
          <Link to="techniques">Techniques</Link>
        </div>

        <SearchBar/>

      </div>
    );
  }
});

module.exports = MainNav;
