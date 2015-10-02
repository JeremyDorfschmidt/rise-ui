var React = require('react');


var CategoryItem = React.createClass({
  render:function(){
    return (
      <div className="ri-category-item" onClick={this.handleClick}>{this.props.title}</div>
    );
  },
  handleClick:function(){

    console.log('handle click');
    if(this.props.onClick){
      this.props.onClick(this.props.name);
    }

  }
});

var CategoryFilter = React.createClass({
  render:function(){
    return (
      <div className="ri-category-filter">
        <div className="ri-main-category-list">
          <CategoryItem title="Interior Finishes" name="interior-finishes" onClick={this.onCategoryClick}/>
          <CategoryItem title="Exterior Finishes" name="exterior-finishes" onClick={this.onCategoryClick}/>
          <CategoryItem title="Windows & Doors" name="windows-doors" onClick={this.onCategoryClick}/>
          <CategoryItem title="Construction" name="construction" onClick={this.onCategoryClick}/>
          <CategoryItem title="Landscaping" name="landscaping" onClick={this.onCategoryClick}/>
          <CategoryItem title="Insulation" name="insulation" onClick={this.onCategoryClick}/>
          <CategoryItem title="Electrical" name="electrical" onClick={this.onCategoryClick}/>
          <CategoryItem title="Plumbing" name="plumbing" onClick={this.onCategoryClick}/>
        </div>
        <div className="ri-sub-category-list">
        </div>
      </div>
    );
  },

  onCategoryClick:function(name){
    console.log('cat click: ' + name);
  }
});

module.exports = CategoryFilter;
