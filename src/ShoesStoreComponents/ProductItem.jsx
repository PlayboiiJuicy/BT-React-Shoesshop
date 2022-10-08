import React from "react";

const ProductItem = ({ shoesData, addItems, handleOpenAndGetDetails }) => {
  return (
    <div className="col-4 my-2">
      <div className="card">
        <img
          src={shoesData.image}
          alt={shoesData.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {shoesData.name} -{" "}
            <em style={{ color: "red" }}>{shoesData.price}$</em>
          </h5>
          <p className="card-text">{shoesData.shortDescription}</p>
          <button
            className="btn btn-warning show mx-2"
            // onClick={() => {
            //   isModalOpen();
            //   handleOpenAndGetDetails(shoesData);
            // }}
            onClick={() => handleOpenAndGetDetails(shoesData)}
          >
            Details
          </button>
          <button
            className="btn btn-success"
            onClick={() => addItems(shoesData)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
