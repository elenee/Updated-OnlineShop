import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const data = useLoaderData();
  const products = data.products;

  return <ProductsList products={products}/>;
};
gi
export default ProductsPage;

export async function loader() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
