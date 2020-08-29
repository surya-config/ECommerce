import React from "react";
import "./Product.css";
import { useStateValue } from "../../../StateProvider";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { IconButton } from "@material-ui/core";

function Product({ id, title, price, imageSrc }) {
  const [{ items }, dispatch] = useStateValue();

  const addToCart = (id) => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: imageSrc,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <h4>{title}</h4>
      <p>
        <span>$</span>
        {price}
      </p>
      <img className="product__image" src={imageSrc} alt={title} />
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
