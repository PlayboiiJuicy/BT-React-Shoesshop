import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const {
      shoesDatas,
      getDetails,
      isModalOpen,
      handleOpenAndGetDetails,
      addItems,
    } = this.props;

    return (
      <div className="row container mx-auto">
        {shoesDatas.map((item) => (
          <ProductItem
            key={item.id}
            shoesData={item}
            // getDetails={getDetails}
            // isModalOpen={isModalOpen}
            handleOpenAndGetDetails={handleOpenAndGetDetails}
            addItems={addItems}
          />
        ))}
      </div>
    );
  }
}
