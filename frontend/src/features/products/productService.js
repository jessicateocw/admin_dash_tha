import axios from "axios";
import { v4 as uuid } from "uuid";

const API_URL = "/api/products/";

// Create new product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const unique_id = uuid();
  const product = { ...productData, SKU: unique_id };
  console.log(product);
  const response = await axios.post(API_URL, product, config);

  return response.data;
};

// Get user products
const getProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user product
const deleteProduct = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + productId, config);

  return response.data;
};

// update user product
const updateProduct = async (productId, productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //console.log("UpDATE", API_URL + productId, productData, config);
  const response = await axios.put(API_URL + productId, productData, config);

  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};

export default productService;
