import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard.js";
// import productImage from "../../images/Appstore.png"
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { getProduct,clearErrors } from "../../actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

// const product = {
//     name:"blue shirt",
//     images:[{url: productImage}],
//     price:"3000",
//     _id:"adarsh",
// }

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {products,loading,error} = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  },[dispatch,error,alert]);

  return (
    <Fragment>
      {
        loading ? (<Loader />) : (
          <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {
              products && products.map((product) => (<Product product={product} />))
            }
          </div>
        </Fragment>
        )
      }
    </Fragment>
  );
};

export default Home;
