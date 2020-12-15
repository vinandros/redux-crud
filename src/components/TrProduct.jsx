import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
  deleteProductAction,
  editProductAction,
} from "../redux/actions/product.actions";
const TrProduct = ({ product }) => {
  const { name, id, price } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#78c2ad",
      cancelButtonColor: "#ff7851",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const rediretToEdition = (product) => {
    dispatch(editProductAction(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price} </span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => rediretToEdition(product)}
          className="btn btn-primary mr-2"
          to={`/products/edit/${id}`}
        >
          Edit
        </button>
        <button onClick={handleDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TrProduct;
