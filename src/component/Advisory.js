import React, { Component } from "react";
import "./Advisory.css";
import Product from "./Product";
// import { Link } from 'react-router-dom';

// const history = useHistory();

class Advisory extends Component {
  routeChange = () => {
    // let path = `/`;
    // history.push(path);
    window.location.href = "/";
  };
  render() {
    // console.log(this.props.dsSanPham);

    return (
      <div>
        <h2 className="Title">Các sản phẩm bạn có thể lựa chọn như là </h2>
        {this.props.dsSanPham.map((value, key) => (
          <Product
            key={key}
            ten={value.ten}
            gia={value.gia}
            anh={value.anh}
            moTa={value.moTa}
            xuatXu={value.xuatXu}
            thuongHieu={value.thuongHieu}
          />
        ))}

        <div className="buttonNext">
          <button className="button" onClick={() => this.routeChange()}>
            Trang chủ
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Advisory;
