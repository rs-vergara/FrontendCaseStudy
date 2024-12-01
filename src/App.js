import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./components/Layout"; // Layout component
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import ViewCart from "./pages/ViewCart"; // Import ViewCart component

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* Public Routes wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ViewCart />} /> {/* Add this route */}
        </Route>

        {/* Admin Routes wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product" element={<EditProduct />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
