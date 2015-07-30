var React = require('react');
var $ = require('jquery');

var SHOW_PAGE_TRANSITION_DELAY = 200;

var BasePage = React.createClass({

  render:function(){
    var pageClass = 'ri-page-content container ' + 'ri-' + this.props.name + '-page';
    return (
      <div className={pageClass}>{this.props.children}</div>
    );
  },

  componentDidMount:function(){
    var $domNode = $(this.getDOMNode());
    setTimeout(function(){
      $domNode.addClass('is-active');
    }, SHOW_PAGE_TRANSITION_DELAY);
  },

  componentWillUnmount:function(){

  }
});

module.exports = BasePage;
