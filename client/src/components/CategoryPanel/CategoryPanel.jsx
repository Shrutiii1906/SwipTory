import React, { useContext } from "react";
import cpStyle from "./CategoryPanel.module.css";
import { UserContext } from "../../UserContext";

const All = require("../../assets/categories/all.jpg");
const Fruits = require("../../assets/categories/Fruits.jpg");
const Medical = require("../../assets/categories/Medical.jpg");
const World = require("../../assets/categories/World.jpg");
const India = require("../../assets/categories/India.jpg");

const categories = [
  { title: "All", url: "url(" + All + ")" },
  { title: "Medical", url: "url(" + Medical + ")" },
  { title: "Fruits", url: "url(" + Fruits + ")" },
  { title: "World", url: "url(" + World + ")" },
  { title: "India", url: "url(" + India + ")" },
];

const Category = ({ title, url, onSelectCategory, selected }) => {
  return (
    <div
      className={cpStyle.card}
      style={{
        backgroundImage: url,
        boxShadow: selected ? "0px 0px 0px 4px #73ABFF" : "",
      }}
      onClick={() => onSelectCategory(title)}
    >
      <span>{title}</span>
    </div>
  );
};

const CatagoryPanel = () => {
  const { selectedCategory, setSelectedCategory } = useContext(UserContext);

  const selection =  (title) => {
    setSelectedCategory(title);
  };
  
  return (
    <div className={cpStyle.panel}>
      <div className={cpStyle.categoryContainer}>
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            url={category.url}
            onSelectCategory={selection}
            selected={selectedCategory === category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CatagoryPanel;
