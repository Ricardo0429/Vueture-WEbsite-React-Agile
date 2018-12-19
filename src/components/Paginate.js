import React from "react";
import { RingLoader } from "react-spinners";

const Paginate = ({ items, Component }) => {
  let itemsArray;
  if (items.length) {
    itemsArray = items.map(item => (
      <Component key={item.id} item={item} />
    ));
  }
  return (
    itemsArray || (
      <RingLoader
        sizeUnit={"px"}
        size={200}
        color={"#34495E"}
      />
    )
  );
};

export default Paginate;