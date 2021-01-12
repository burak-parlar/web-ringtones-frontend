import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import DeleteIcon from "../../Assets/icons/Delete.svg";

import { deleteFromCart } from "../../store/actions/cart";

import "./CartPage.css";
import "../commonStyle.css";

const CartPage = (props) => {
  const sounds = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const history = useHistory();

  const payment = () => {
    history.push("/payment");
  };

  const deleteSound = (soundId) => {
    dispatch(deleteFromCart(soundId));
  };

  const calculateTax = () => {
    const tax = (calculateTotal() * 18) / 100;
    return tax;
  };

  const calculateTotal = () => {
    let sum = 0;
    sounds.map((item) => {
      console.log(sum);
      sum += item.price;
    });
    return sum;
  };

  const calculateTotalAndTax = () => {
    return calculateTotal() + calculateTax();
  };

  const isCardEmpty = () => {
    if (sounds.length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="mainContainer">
      <div style={{ marginTop: "3%" }}>
        <h3>Your Cart</h3>
      </div>
      <div className="cartBox">
        <ul className="cart">
          {sounds.map((item) => {
            return (
              <li key={item.id + item.name} className="cartItem">
                <div style={{ flex: 5 }}>
                  <h5>{item.name}</h5>
                </div>
                <div
                  className="delete-container"
                  onClick={() => deleteSound(item.id)}
                >
                  <img src={DeleteIcon} />
                </div>

                <div style={{ flex: 2 }}>
                  <h5>Price</h5> {item.price}$
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom-container">
        <div className="summary-container">
          <h4>Tax: {calculateTax().toFixed(2)} $</h4>
          <h4>Total: {calculateTotalAndTax().toFixed(2)} $</h4>
        </div>
        <div className="payment-button-container">
          <button
            className="payment-button"
            disabled={isCardEmpty()}
            onClick={payment}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
