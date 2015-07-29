var React = require('react');
import BasePage from './base-page.js';

var Home = React.createClass({
  render:function(){
    return (
      <BasePage name="home">
        <div className="ri-tagline">Your Home, Built with Purpose.</div>

        <div className="ri-login-actions">
          <span className="ri-cta-button cta-facebook-login"> <i className="fa fa-facebook"></i> Sign in with Facebook</span>
          <span className="ri-cta-button cta-email-login"><i className="fa fa-envelope"></i>Sign up with Email</span>
        </div>

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
      </BasePage>
    );
  }
});

module.exports = Home;
