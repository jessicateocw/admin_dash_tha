import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Form from "../components/ProductForm";
import Item from "../components/ProductItem";
import Spinner from "../components/Spinner";
import { getProducts, reset } from "../features/products/productSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getProducts());
    //console.log(products);

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Admin Dashboard</p>
      </section>

      {selected && (
        <div id="popup" className="overlay">
          <div className="form-popup">
            <Form />
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
      <div className="form-group">
        <button
          className="btn btn-block"
          type="submit"
          onClick={() => {
            setSelected(true);
          }}
        >
          Add Product
        </button>
      </div>

      <section className="content">
        {products.length > 0 ? (
          <div className="products">
            {products.map((product) => (
              <Item key={product.SKU || product._id} product={product} />
            ))}
          </div>
        ) : (
          <h3>Product List Empty</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
