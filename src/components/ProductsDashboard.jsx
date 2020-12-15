import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestProductsAction } from "../redux/actions/product.actions";
import Spinner from "./Spinner/Spinner";
import TrProduct from "./TrProduct";

const ProductsDashboard = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(requestProductsAction());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center my-5">Product List</h2>

      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <TrProduct key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}
      {error ? (
        <p className="font-weight-bold d-block text-center alert-danger p-2 text-white w-100 text-uppercase">
          Something went wrong
        </p>
      ) : null}
    </>
  );
};

export default ProductsDashboard;
