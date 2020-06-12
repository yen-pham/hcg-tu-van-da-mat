import React, { Component } from "react";
import  './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay">
          <h1>Hệ chuyên gia tư vấn chăm sóc da mặt</h1>
          <h3>Tình yêu bây giờ, 3% là duyên phận, 7% nhờ cố gắng, 90% nhờ vào gương mặt.
            <br/> Thế nên, chào mừng bạn đến thế giới của chúng ta.</h3>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
    );
  }
}

export default Header;
