var React = require('react');
import BasePage from './base-page.js';
import $ from 'jquery';

var currentBgIndex = 1;
var MIN_BG_INDEX = 1;
var MAX_BG_IMAGES = 4;

var Home = React.createClass({
  render:function(){
    return (
      <BasePage name="home">

        <div className="row">
          <div className="col-md-12">
            <div className="ri-tagline">Your Home, Built with Purpose.</div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-3 col-md-offset-3">
            <span className="ri-cta-button cta-facebook-login"> <i className="fa fa-facebook"></i> Sign in with Facebook</span>
          </div>

          <div className="col-md-3">
            <span className="ri-cta-button cta-email-login"><i className="fa fa-envelope"></i>Sign up with Email</span>
          </div>
        </div>

        <div className="row ri-discover-actions">

          <div className="col-md-4 right-align">
            <div className="ri-discover-badge">
              <i className="fa fa-lightbulb-o"></i>
              <span className="ri-discover-badge-text">Get Inspired</span>
            </div>
          </div>

          <div className="col-md-4 center-align">
            <div className="ri-discover-badge">
              <i className="fa fa-usd"></i>
              <span className="ri-discover-badge-text">Save Money</span>
            </div>
          </div>

          <div className="col-md-4 left-align">
            <div className="ri-discover-badge">
              <i className="fa fa-users"></i>
              <span className="ri-discover-badge-text">Find a Pro</span>
            </div>
          </div>

        </div>

      {/*
       <div className="row">
       <div className="col-md-12">
       <div className="ri-login-actions">
       <span className="ri-cta-button cta-facebook-login"> <i className="fa fa-facebook"></i> Sign in with Facebook</span>
       <span className="ri-cta-button cta-email-login"><i className="fa fa-envelope"></i>Sign up with Email</span>
       </div>
       </div>
       </div>
      */}


      {/*<div className="row">
          <div className="col-md-12">

            <div className="ri-discover-actions">
              <div className="ri-discover-badge">
                <i className="fa fa-lightbulb-o"></i>
                <span className="ri-discover-badge-text">Get Inspired</span>
              </div>
              <div className="ri-discover-badge">
                <i className="fa fa-usd"></i>
                <span className="ri-discover-badge-text">Save Money</span>
              </div>
              <div className="ri-discover-badge">
                <i className="fa fa-users"></i>
                <span className="ri-discover-badge-text">Find a Pro</span>
              </div>

            </div>
          </div>
        </div>*/}

      {/*<div className="ri-bg-arrow ri-bg-arrow-left"></div>
        <div className="ri-bg-arrow ri-bg-arrow-right"></div>*/}

      </BasePage>
    );
  },

  showNextBackground:function(){
    currentBgIndex >= MAX_BG_IMAGES ? currentBgIndex = MIN_BG_INDEX : currentBgIndex++;
    this.addBackgroundClass(currentBgIndex);
  },

  showPrevBackground:function(){
    currentBgIndex <= MIN_BG_INDEX ? currentBgIndex = MAX_BG_IMAGES : currentBgIndex--;
    this.addBackgroundClass(currentBgIndex);
  },

  addBackgroundClass:function(bgIndex){
    $('body').removeClass();
    $('body').addClass('ri-app-bg-' + bgIndex);
  }
});

module.exports = Home;
