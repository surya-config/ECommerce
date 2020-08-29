import React from "react";
import "./Cart.css";
import { useStateValue } from "../../StateProvider";

function Cart() {
  const [{ items }, dispatch] = useStateValue();

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cart">
      <div className="cart__heading">
        <h3>My Shopping Cart</h3>
        <div className="cart__total">
          <h5>
            Total :<span> $1000</span>
          </h5>
        </div>
      </div>

      {items.map((item) => (
        <div className="cart__items">
          <div className="cart__item">
            <img className="cart__image" src={item.image} />

            <div className="cart__info">
              <h3>{item.title}</h3>
              <p>
                <span>$</span>
                {item.price}
              </p>
            </div>
          </div>
          <div className="cart__buttons">
            <button
              className="cart__button1"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
            <button className="cart__button2">Move to Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
