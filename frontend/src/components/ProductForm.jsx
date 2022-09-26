import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../features/products/productSlice";

function ProductForm({ product }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState({});
  const [imageURL, setImageURL] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    let file = {};
    if (image) {
      file = image;
    }
    if (isUpdate) {
      dispatch(updateProduct({ id: product._id, text: text, file: file }));
      window.location.reload(false);
    } else {
      dispatch(createProduct({ text, file: file }));
    }

    setText("");
  };

  const onSubmitFile = async () => {
    const inputFile = document.getElementById("fileInput");

    setImage(inputFile?.files?.item(0));
    setImageURL(URL.createObjectURL(inputFile?.files.item(0)));
    //console.log(inputFile?.files?.item(0));
  };

  useEffect(() => {
    if (product) {
      setText(product.text);
      setIsUpdate(true);
    }
  }, []);

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {imageURL.length > 0 && <img src={imageURL} className="image" />}
          <label>Image: </label>
          <input id="fileInput" type="file" onChange={onSubmitFile} />
          <label htmlFor="text">Product: </label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {isUpdate ? (
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Update Product
            </button>
          </div>
        ) : (
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Product
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

export default ProductForm;
