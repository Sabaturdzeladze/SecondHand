import React from "react";

export const UserCartItem = ({ cart, onDelete }) => {
  return cart.map(item => (
    <div key={item.id} className="checkout--products-container">
      <div className="checkout--products-container_img">
        <img
          src={`/images/${item.images.filename}`}
          alt="sneakers"
        />
      </div>
      <div className="checkout--products-container_description">
        <p className="headline">
          <b>
            {item.gender}'s {item.subCategory}
          </b>
        </p>
        <p className="headline">Brand: {item.brand}</p>
        <p className="headline">Condition: {item.condition}</p>
        <p className="headline">Color: {item.color}</p>
        <p className="headline">Size: {item.size}</p>
      </div>
      <div className="checkout--products-container_delete">
        <b>
          Price:{" "}
          <span className={item.priceSale ? "reduced" : "price"}>
            {item.price}$
          </span>{" "}
          {item.priceSale && <span className="price">{item.priceSale}$</span>}
        </b>
        <button onClick={() => onDelete(item.id)} className="btn btn-danger">
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  ));
};
