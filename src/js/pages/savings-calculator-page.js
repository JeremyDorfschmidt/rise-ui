import React from 'react';
import $ from 'jquery';
import BasePage from './base-page.js';

var SavingsCalculator = React.createClass({
  render:function(){
    return (
      <BasePage name="savings-calculator">Savings Calculator</BasePage>
    );
  },
  componentDidMount:function(){
    $('body').addClass('ri-app-bg-gray');
  },
  componentWillUnmount:function(){
    $('body').removeClass('ri-app-bg-gray');
  }
});

module.exports = SavingsCalculator;
