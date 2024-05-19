import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "", // corrected typo in variable name
      productPrice: 0, // corrected typo in variable name
    };
  }

  render() {
    return (
      <form
        className="row g-3"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName, this.state.productPrice);
          this.setState({
            // reset state after submitting
            productName: "",
            productPrice: 0,
          });
        }}
      >
        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="productName"
            onChange={(e) => {
              this.setState({
                productName: e.currentTarget.value,
              });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({
                productPrice: e.currentTarget.value,
              });
            }}
            value={this.state.productPrice}
          />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button type="submit" className="btn btn-primary w-100">
            Add Item to Cart
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
