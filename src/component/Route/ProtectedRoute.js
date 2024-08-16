import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import {  } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const ProtectedRoute = ({isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <Fragment>
      {loading === false && (
        <Routes>
            <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated === false) {
                  return navigate("/login")
                }

                if (isAdmin === true && user.role !== "admin") {
                  return navigate("/login")
                }

                return <Component {...props} />;
            }}
            />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
