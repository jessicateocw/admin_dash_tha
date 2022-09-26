import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/productSlice";
import Form from "./ProductForm";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="product">
        <h2>{product.text}</h2>

        <button
          onClick={() => {
            setSelected(true);
          }}
          className="btn-update"
        >
          change
        </button>
        <button
          onClick={() => dispatch(deleteProduct(product._id))}
          className="close"
        >
          X
        </button>
        <div style={{ fontSize: "0.75rem" }}>
          {new Date(product.createdAt).toLocaleString("en-US")}
        </div>
      </div>
      {selected && (
        <div id="popup" className="overlay">
          <div className="form-popup">
            <Form product={product} />
            <button
              onClick={() => {
                setSelected(false);
              }}
              className="close"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItem;
