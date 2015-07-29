require('font-awesome-webpack');
require('suitcss-base');
require('./css/styles.css');
require('./less/app.less');

import React from 'react/addons';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import MainNav from './js/components/main-nav.js';

import Home from './js/pages/home-page.js';
import Photos from './js/pages/photos-page.js';
import Products from './js/pages/products-page.js';
import Techniques from './js/pages/techniques-page.js';
import CategoryPage from './js/pages/category-page.js';


var App = React.createClass({

  displayName:'App',

  render() {
    return (
      <div className="ri-app-wrapper">

        <MainNav/>

        <div className="ri-app-content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var appRoutes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="photos" path="/photos" handler={Photos}/>
    <Route name="products" path="/products" handler={Products}>
      <Route path="/products/:id" handler={CategoryPage}/>
    </Route>
    <Route name="techniques" path="/techniques" handler={Techniques}/>
  </Route>
);

Router.run(appRoutes, function (Handler) {
  React.render(<Handler/>, document.body);
});
