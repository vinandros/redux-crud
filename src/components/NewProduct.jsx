import React, { useState } from "react";
import { addNewProductAction } from "../redux/actions/product.actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner/Spinner";

const NewProduct = ({ history }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const { loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productPrice <= 0 || productName.trim() === "") {
      return;
    }

    dispatch(
      addNewProductAction({
        name: productName,
        price: productPrice,
      })
    );
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="name"
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                  value={productName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
                  onChange={(e) => {
                    setProductPrice(Number(e.target.value));
                  }}
                  value={productPrice}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100 text-uppercase"
              >
                Add new product
              </button>
            </form>
            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
