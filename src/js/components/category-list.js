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
      <div className="ri-category-list container">

        <div className="row">
          <div className=" col-md-3 col-sm-6">
            <CategoryListItem name="interior" title="Interior Finishes"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="exterior" title="Exterior Finishes"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="construction" title="Construction"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="windows-doors" title="Windows and Doors"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="landscaping" title="Landscaping"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="insulation" title="Insulation"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="electrical" title="Electrical"/>
          </div>

          <div className="col-md-3 col-sm-6">
            <CategoryListItem name="plumbing" title="Plumbing"/>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = CategoryList;
