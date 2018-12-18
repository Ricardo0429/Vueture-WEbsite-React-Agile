import React from "react";
import { PacmanLoader } from "react-spinners";
import "../assets/PaginateProjects.css";

const Paginate = ({ items, Component }) => {
  let itemsArray;
  if (items.length) {
    itemsArray = items.map(item => (
      <Component key={item.id} item={item} />
    ));
  }
  return (
    itemsArray || (
      <PacmanLoader
        className="spinner"
        sizeUnit={"px"}
        size={100}
        color={"#34495E"}
      />
    )
  );
};

export default Paginate;
