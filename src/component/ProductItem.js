import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
         <tr>
              <td>{this.props.sanPham.ten}</td>
              <td>{this.props.sanPham.xuatXu}</td>
              <td>{this.props.sanPham.thuongHieu}</td>
              <td>{this.props.sanPham.gia}</td>
              <td><img src={this.props.sanPham.anh} width="150px"/></td>
              {/* <td>{this.props.sanPham.moTa}</td> */}
            </tr>
    );
  }
}

export default ProductItem;