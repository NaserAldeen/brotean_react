import React from "react";
import Modal from "react-responsive-modal";

// Components
import OrderModalRow from "./OrderModalRow";

class OrderModal extends React.Component {
  state = {
    open: false
  };

  orderModalRows = this.props.orderItems.map((item, index) => (
    <OrderModalRow key={index} item={item} />
  ));

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="mt-5 p-2">
            <table className="mt-1 table text-center">
              <thead className="thead-dark">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{this.orderModalRows}</tbody>
            </table>
          </div>
        </Modal>
        <input
          className="btn btn-sm btn-primary"
          type="button"
          onClick={this.onOpenModal}
          value="View"
        />
      </div>
    );
  }
}
export default OrderModal;
