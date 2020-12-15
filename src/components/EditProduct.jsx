import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestEditProductAction } from "../redux/actions/productActions";
const EditProduct = () => {
  const { productEdit } = useSelector((state) => state.products);
  const [product, setProduct] = useState({
    name: "",
    id: "",
    price: "",
  });

  useEffect(() => {
    if (productEdit) {
      setProduct(productEdit);
    }
  }, [productEdit]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestEditProductAction(product));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit product</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: Number(e.target.value) })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weigth-bold d-block w-100 text-uppercase"
              >
                save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
