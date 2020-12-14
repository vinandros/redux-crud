import React from "react";
const ProductsDashboard = () => {
  return (
    <>
      <h2 className="text-center my-5">Product List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default ProductsDashboard;
