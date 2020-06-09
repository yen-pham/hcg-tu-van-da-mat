import React, { Component } from "react";
import  './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay">
          <h1>Hệ chuyên gia tư vấn chăm sóc da mặt</h1>
          <h3>Reasons for Choosing US</h3>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
    );
  }
}

export default Header;
