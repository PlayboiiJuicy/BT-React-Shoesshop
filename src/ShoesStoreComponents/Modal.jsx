import React from "react";

const Modal = ({ shoesDetails, isModalDetailsOpen, onCloseDetails }) => {
  if (!isModalDetailsOpen) {
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
                Shoes Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onCloseDetails}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row d-flex align-items-center">
                <div className="col-4">
                  <img
                    src={shoesDetails.image}
                    className="img-fluid"
                    alt={shoesDetails.name}
                  />
                </div>
                <div className="col-8">
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Description</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td>{shoesDetails.name}</td>
                        <td>{shoesDetails.quantity}</td>
                        <td>{shoesDetails.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onCloseDetails}
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

export default Modal;
