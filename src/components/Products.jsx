import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import Pagination from "./Pagination/Pagination";
import ProducDetails from "./product-details/ProducDetails";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all-products");
  const [rangeValue, setRangeValue] = useState(200000);
  const [rangeFilterData, setRangeFilterData] = useState([]);
  const productsPerPage = 9;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  // prduct details popup
  const [productsDetail, setProductsDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        selectedOption === "all-products"
          ? `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
              (page - 1) * productsPerPage
            }`
          : `https://dummyjson.com/products/category/${selectedOption}?limit=${productsPerPage}&skip=${
              (page - 1) * productsPerPage
            }`
      );

      if (response.data) {
        setProducts(response.data);
        const totalItemCount = response.data.total;
        setTotalPage(Math.ceil(totalItemCount / productsPerPage));
      }
    } catch (err) {
      console.log({ err: err });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, selectedOption]);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setPage(1);
  };

  const handleFilter = () => {
    fetchProducts();
    if (rangeValue <= 200000) {
      const filteredData = products.products.filter(
        (product) => product.price * 80 <= rangeValue
      );
      setRangeFilterData(filteredData);
    }
    setPage(1);
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPage &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const productsToMap =
    rangeValue < 200000 ? rangeFilterData : products.products;
  // setting up product detail popup
  const handleProductDetailPopup = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
    setProductsDetail((prev) => !prev);
  };
  return (
    <div>
      {productsDetail && (
        <div className="blur-background" onClick={handleProductDetailPopup}>
          {/* Product Details */}
          <div className="product-details-container">
            <div
              className="product-details-content"
              onClick={(e) => e.stopPropagation()}
            >
              <ProducDetails
                product={selectedProduct}
                setProductsDetail={setProductsDetail}
              />
            </div>
          </div>
        </div>
      )}
      <h2 className="title">{selectedOption}</h2>
      <hr />
      {/* main flex between the filter box and product cards starts*/}
      <div className="main-flex">
        {/* filter box */}
        <div className="filter-container">
          <h3>Filter</h3>
          <ul>
            <li className="inline">
              All Products{" "}
              <input
                type="radio"
                value={"all-products"}
                checked={selectedOption === "all-products"}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              Smart phones{" "}
              <input
                type="radio"
                value={"smartphones"}
                checked={selectedOption === "smartphones"}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              Laptops{" "}
              <input
                type="radio"
                className="radio"
                value={"laptops"}
                checked={selectedOption === "laptops"}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              Fragrances{" "}
              <input
                type="radio"
                className="radio"
                value={"fragrances"}
                checked={selectedOption === "fragrances"}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              Skin care{" "}
              <input
                type="radio"
                className="radio"
                value={"skincare"}
                checked={selectedOption === "skincare"}
                onChange={handleRadioChange}
              />
            </li>
            <li>
              Home decore{" "}
              <input
                type="radio"
                className="radio"
                value={"home-decoration"}
                checked={selectedOption === "home-decoration"}
                onChange={handleRadioChange}
              />
            </li>
          </ul>
          <div>
            <div>
              <p>Price Low to High</p>
              <span className="high-low">
                <p className="left">Low</p>
                <p className="mid">{rangeValue}</p>
                <p className="right">High</p>
              </span>
              <input
                type="range"
                min={100}
                step={100}
                max={200000}
                className="range-bar"
                value={rangeValue}
                onChange={(e) => {
                  setRangeValue(e.target.value);
                }}
              />
            </div>
            <button className="apply-btn" onClick={handleFilter}>
              Apply
            </button>
          </div>
        </div>
        {/* products */}
        <div className="cards-container">
          {productsToMap ? (
            productsToMap.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onClick={(e) => handleProductDetailPopup(e, product)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                  className="product-img"
                />
                <div className="price-section">
                  <span>
                    <h4 className="product-name">{product.title}</h4>
                    <h4 className="product-name">{product.price * 80}₹</h4>
                  </span>
                  <span>
                    <button className="buy-btn">Buy now</button>
                    <br />
                    <button className="buy-btn" style={{ marginTop: "5px" }}>
                      Add to Cart
                    </button>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <span>Loading...</span>
          )}
          <span>
            {rangeValue < 200000 && !productsToMap.length && "No Data Found"}
          </span>
        </div>
      </div>
      {/* flex container end */}
      {/* products deatail page */}
      {/* pagination componet */}
      <Pagination
        pageValue={page}
        totalPages={totalPage}
        selectPageHandler={selectPageHandler}
      />
    </div>
  );
};

export default Products;
