import React from "react";
import "./categories.scss";
import {Link} from 'react-router-dom';


import { categories } from "../../constant/categories.js";

const Categories = () => {
  return <div className="categories flexRow">
    <div className="row cat_wrapper">
      <div className="col">
        <div className="row">
          <img src={categories[0].url} alt="" />
          
          <button className="title">
            <Link className="link" to="/products/1">{categories[0].title}</Link>
          </button>
        </div>
        <div className="row">
          <img src={categories[1].url} alt="" />
          <button className="title">
            <Link className="link" to="/products/1">{categories[1].title}</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={categories[2].url} alt="" />
          <button className="title">
            <Link className="link" to="/products/1">{categories[2].title}</Link>
          </button>
        </div>
      </div>
      <div className="col-lg">
        <div className="row">
          <div className="col">
            <img src={categories[3].url} alt="" />
            <button className="title">
            <Link className="link" to="/products/1">{categories[3].title}</Link>
          </button>
          </div>
          <div className="col">
            <img src={categories[4].url} alt="" />
            <button className="title sm">
            <Link className="link" to="/products/1">{categories[4].title}</Link>
          </button>
          </div>
        </div>
        <div className="row">
          <img src={categories[5].url} alt="" />
          <button className="title">
            <Link className="link" to="/products/1">{categories[5].title}</Link>
          </button>
        </div>
      </div>
    </div>
  </div>;
};

export default Categories;
