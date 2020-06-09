import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="Advisory">
        <img
          src={this.props.anh}
          width="300px"
        />
        <div className = "introduce">
           <h3>
           {this.props.ten}
        </h3>
        <p>Xuất xứ : {this.props.xuatXu}</p>
        <p>Thương hiệu : {this.props.thuongHieu}</p>
        <h4>Giá : {this.props.gia} vnd</h4>
        <p>
          {this.props.moTa}
        </p>
        </div>
       
      </div>
    );
  }
}

export default Product;
