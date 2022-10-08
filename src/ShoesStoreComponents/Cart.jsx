import React from "react";

const Cart = ({ carts, onClose, isCartOpen, onHandleItemAmount }) => {
  // console.log(isCartOpen);
  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show d-block modal-lg"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Shopping Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" onClick={onClose}>
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <td>Image</td>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {carts.map((item) => {
                    return (
                      <tr key={item.id} className="align-middle">
                        <td>
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              width="80px"
                              height="80px"
                            />
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <button
                            className="btn "
                            onClick={() => onHandleItemAmount(item.id, 1)}
                          >
                            +
                          </button>
                          <span className="mx-2">{item.amount}</span>
                          <button
                            className="btn "
                            onClick={() => onHandleItemAmount(item.id, -1)}
                          >
                            -
                          </button>
                        </td>

                        <td>{item.price * item.amount}$</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Cart;
