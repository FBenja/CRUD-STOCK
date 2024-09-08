import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from '../pages/Products'
import CreateProduct from '../pages/CreateProduct'
import Home from '../pages/Home'




const AppRoutes = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    </>
    );
};
export default AppRoutes;
