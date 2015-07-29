import React from 'react/addons';
import $ from 'jquery';
import BasePage from './base-page.js';
import CategoryList from '../components/category-list.js';


var Products = React.createClass({
  render:function(){
    return (
      <BasePage name="products">
        <CategoryList/>
      </BasePage>
    );
  },
  componentDidMount:function(){
    $('body').addClass('ri-app-bg-blurry');
  },
  componentWillUnmount:function(){
    $('body').removeClass('ri-app-bg-blurry');
  }
});

module.exports = Products;
