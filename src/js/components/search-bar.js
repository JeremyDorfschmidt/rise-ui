var React = require('react');

var SearchBar = React.createClass({
  render:function(){
    return (
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <input className="search-input"/>
      </div>
    );
  }
});

module.exports = SearchBar;
