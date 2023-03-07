import React from "react";
import "./categories.scss";

import { categories } from "../../constant/categories.js";

const Categories = () => {
  return <div className="categories flexRow">
    <div className="row cat_wrapper">
      <div className="col">
        <div className="row">
          <img src={categories[0].url} alt="" />
          <button className="title">{categories[0].title}</button>
        </div>
        <div className="row">
          <img src={categories[1].url} alt="" />
          <button className="title">{categories[1].title}</button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={categories[2].url} alt="" />
          <button className="title">{categories[2].title}</button>
        </div>
      </div>
      <div className="col-lg">
        <div className="row">
          <div className="col">
            <img src={categories[3].url} alt="" />
            <button className="title">{categories[3].title}</button>
          </div>
          <div className="col">
            <img src={categories[4].url} alt="" />
            <button className="title sm">{categories[4].title}</button>
          </div>
        </div>
        <div className="row">
          <img src={categories[5].url} alt="" />
          <button className="title">{categories[5].title}</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Categories;
