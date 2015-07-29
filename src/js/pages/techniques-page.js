import React from 'react';
import $ from 'jquery';
import BasePage from './base-page.js';

var Techniques = React.createClass({
  render:function(){
    return (
      <BasePage name="techniques">Techniques Page</BasePage>
    );
  },
  componentDidMount:function(){
    $('body').addClass('ri-app-bg-gray');
  },
  componentWillUnmount:function(){
    $('body').removeClass('ri-app-bg-gray');
  }
});

module.exports = Techniques;
