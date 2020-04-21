import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem } = props;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            style={{ cursor: "pointer" }}
            key={item._id}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
