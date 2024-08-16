import React, { useState } from "react";
import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webfont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store"
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js"
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
// import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
// import NotFound from "./component/layout/Not Found/NotFound.js";


function App() {
  const { isAuthenticated ,user} = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    // console.log("data is", data.stripeApiKey)

    setStripeApiKey(data.stripeApiKey);
  }
  // console.log("data was ",stripeApiKey);

  React.useEffect(() => {
  
    webfont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  },[]);

  return (
    <Router>
      <Header />
      
      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey &&  
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path ="/process/payment" element={<Payment />} />
        </Elements>
      }

      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact path ="/product/:id" element={<ProductDetails />} />
        <Route exact path ="/products" element={<Products />} />
        <Route path ="/products/:keyword" element={<Products />} />
        <Route exact path ="/search" element={<Search />} />

        <Route exact path ="/login" element={<LoginSignUp />} />

        {/* <ProtectedRoute exact path ="/account" element={<Profile />} /> */}

        <Route exact path="/password/forgot" element={<ForgotPassword />} />

        <Route exact path="/password/reset/:token" element={<ResetPassword />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <ProtectedRoute exact path ="/account" element={<Profile />} />
      <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
      <ProtectedRoute exact path="/login/shipping" element={<Shipping />} />
      <ProtectedRoute exact path="/order/confirm" element={<ConfirmOrder />} />
      <ProtectedRoute exact path="/success" element={<OrderSuccess />} />
      <ProtectedRoute exact path="/orders" element={<MyOrders/>} />
      {/* <ProtectedRoute exact path="/order/:id" element={<OrderDetails/>} /> */}
      {/* <ProtectedRoute exact path="/process/payment" element={<Payment />} /> */}
      <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          element={<Dashboard/>}
      />

        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          element={<ProductList/>}
        />

        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          element={<NewProduct/>}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          element={<UpdateProduct/>}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          element={<OrderList/>}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          element={<ProcessOrder/>}
        />

        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          element={<UsersList/>}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          element={<UpdateUser/>}
        />

      <ProtectedRoute
          exact
          path="/password/update"
          element={<UpdatePassword />}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          element={<ProductReviews/>}
        />
        
        {/* <Routes>
            <Route exact path="*"
                element={ <NotFound/>}
              />
        </Routes> */}

      <Footer />
    </Router>
  );
}

export default App;
