var React = require('react');

var CategoryList = React.createClass({
  render:function(){
    return (
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input className="search-input"/>
      </div>
    );
  }
});

module.exports = CategoryList;
