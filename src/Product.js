import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue(); // eslint-disable-line no-empty-pattern
  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <big>{price}</big>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
