import React from "react";
const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit product</h2>

            <form action="">
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
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
