var React = require('react');

var CategoryListItem = React.createClass({
  render:function(){
    var itemClass = 'ri-category-list-item cat-' + this.props.name;
    var imageClass = 'category-image cat-' + this.props.name;
    return (
      <div className={itemClass}>
        <div className="category-image-wrapper">
          <div className={imageClass}>
          </div>
        </div>
        <div className="category-title">{this.props.title}</div>
      </div>
    );
  }
});

var CategoryList = React.createClass({
  render:function(){
    return (
      <div className="ri-category-list">
        <CategoryListItem name="interior" title="Interior Finishes"/>
        <CategoryListItem name="exterior" title="Exterior Finishes"/>
        <CategoryListItem name="construction" title="Construction"/>
        <CategoryListItem name="windows-doors" title="Windows and Doors"/>
        <CategoryListItem name="landscaping" title="Landscaping"/>
        <CategoryListItem name="insulation" title="Insulation"/>
        <CategoryListItem name="electrical" title="Electrical"/>
        <CategoryListItem name="plumbing" title="Plumbing"/>
      </div>
    );
  }
});

module.exports = CategoryList;
