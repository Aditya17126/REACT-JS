import React from "react";
import MenuItem from "./MenuItem";

function MenuList({list = []}) {
  return (
    <ul className="menuListContainer">
      {
       list && list.length
        ? list.map((listItem) => {
           return (
            <MenuItem item={listItem} />
          )
          })
        : null
      }
    </ul>
  );
}

export default MenuList;
