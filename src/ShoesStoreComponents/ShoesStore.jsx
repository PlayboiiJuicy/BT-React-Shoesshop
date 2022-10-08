import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";
import Cart from "./Cart";

class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoesDetails: "",
      isModalDetailsOpen: false,
      isShoppingCartOpen: false,
      carts: [],
    };
  }

  // handleGetShoesDetails = (item) => {
  //   this.setState({ shoesDetails: item });
  //   console.log(item);
  // };

  handleOpenAndGetDetails = (item) => {
    this.setState((state) => ({ isModalDetailsOpen: true }));
    this.setState({ shoesDetails: item });
    // console.log(this.state.isModalOpen);
    // console.log(item);
  };

  handleCloseDetails = () => {
    this.setState({ isModalDetailsOpen: false });
  };

  handleModalShoppingCart = () => {
    this.setState((state) => ({
      isShoppingCartOpen: !state.isShoppingCartOpen,
    }));
    // console.log(this.state.isShoppingCartOpen);
  };

  handleAddToCart = (item) => {
    const idx = this.state.carts.findIndex((value) => {
      return value.id === item.id;
    });

    if (idx === -1) {
      this.setState((state) => ({
        carts: [...this.state.carts, { ...item, amount: 1 }],
      }));
    } else {
      const newCarts = [...this.state.carts];
      newCarts[idx].amount += 1;
      this.setState({ carts: newCarts });
    }
    // console.log("carts", this.state.carts);
    // console.log(item);
  };

  handleItemAmount = (itemId, amount) => {
    const idx = this.state.carts.findIndex((item) => {
      return item.id === itemId;
    });
    const newCarts = [...this.state.carts];

    if (newCarts[idx].amount === 1 && amount === -1) {
      newCarts.splice(idx, 1);
      this.setState({ carts: newCarts });
    } else {
      newCarts[idx].amount += amount;
      this.setState({ carts: newCarts });
    }
  };

  render() {
    const styleCart = {
      position: "fixed",
      right: "5%",
      fontSize: "20px",
      padding: "5px 20px",
      border: "none",
      backgroundColor: "black",
      color: "white",
      borderRadius: "10px",
    };
    return (
      <div>
        <h3 className="text-center">Shoes Store</h3>
        <button style={styleCart} onClick={this.handleModalShoppingCart}>
          Cart
        </button>
        <ProductList
          shoesDatas={data}
          handleOpenAndGetDetails={this.handleOpenAndGetDetails}
          // isModalOpen={this.state.isModalOpen}
          // getDetails={this.handleGetShoesDetails}
          addItems={this.handleAddToCart}
        />
        <Modal
          shoesDetails={this.state.shoesDetails}
          isModalDetailsOpen={this.state.isModalDetailsOpen}
          onCloseDetails={this.handleCloseDetails}
        />
        <Cart
          onClose={this.handleModalShoppingCart}
          isCartOpen={this.state.isShoppingCartOpen}
          carts={this.state.carts}
          onHandleItemAmount={this.handleItemAmount}
        />
      </div>
    );
  }
}

export default ShoesStore;
