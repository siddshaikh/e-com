import React from "react";
import "./productsDetails.css";

const ProducDetails = ({ product, setProductsDetail }) => {
  console.log(product);
  return (
    <div>
      <h2 className="heading">Product detail</h2>
      <div className="detail-card">
        <button
          className="buy-now"
          onClick={() => setProductsDetail((prev) => !prev)}
        >
          Back to Shopping
        </button>
        <div className="first">
          <img
            src={product.images[0]}
            alt={product.title}
            width={150}
            height={150}
            loading="lazy"
          />
          <img
            src={product.images[1]}
            alt={product.title}
            width={150}
            height={150}
            loading="lazy"
          />
        </div>
        <img
          src={product.thumbnail}
          alt="thumbnail"
          width={200}
          loading="lazy"
        />
        <div className="second">
          <img
            src={product.images[2]}
            alt={product.title}
            width={150}
            height={150}
            loading="lazy"
          />
          <img
            src={product.images[3]}
            alt={product.title}
            width={150}
            height={150}
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <span>Brand:<b>{product.brand}</b></span>
          <span>
            price: <b>{product.price * 80}₹</b>{" "}
          </span>
        </div>
        <br />
        <div className="flex">
          <span>
            <b>{product.title}</b>
          </span>
          <span>
            {" "}
            Rating: <b>{product.rating}</b>
          </span>
        </div>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProducDetails;
