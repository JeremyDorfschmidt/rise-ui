var React = require('react');
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import riseLogo from '../../images/rise-logo-black.png';
import SearchBar from './search-bar.js';
import $ from 'jquery';

var MainNav = React.createClass({
  render:function(){
    return (
      <div className="ri-app-nav-bar">

        <i className="fa fa-bars mobile-menu-btn" onClick={this.toggleMobileMenu}></i>
        <span className="ri-ise-logo">
          <Link to="home"><img src={riseLogo}/></Link>
        </span>

        <div ref="menu" className="ri-nav-menu">
          <Link to="home" onClick={this.onMenuITemClick}>Home</Link>
          <Link to="photos" onClick={this.onMenuITemClick}>Photos</Link>
          <Link to="products" onClick={this.onMenuITemClick}>Products</Link>
          <Link to="techniques" onClick={this.onMenuITemClick}>Techniques</Link>
          <Link to="calculator" onClick={this.onMenuITemClick}>Savings Calculator</Link>
        </div>

        <SearchBar/>

      </div>
    );
  },

  toggleMobileMenu:function(){
    $(this.refs.menu.getDOMNode()).toggleClass('mobile-menu-visible');
  },

  onMenuITemClick:function(){
    $(this.refs.menu.getDOMNode()).removeClass('mobile-menu-visible');
  }
});

module.exports = MainNav;
