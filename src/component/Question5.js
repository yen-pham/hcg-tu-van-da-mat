import React, { Component } from "react";
import "./Question.css";

class Question5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m1: false,
      m2: false,
      m3: false,
    };
  }

  check = (val) => {
    let m = [];
    if (this.state.m2) {
      m.push("M2");
    }
    if (this.state.m1) {
      m.push("M1");
    }
    if (this.state.m3) {
      m.push("M3");
    }

    // console.log(val);
    if (val == "M1") {
      if (this.state.m1) {
        this.setState({ m1: false });
        m.splice(m.indexOf("M1"), 1);
      } else {
        m.push("M1");
        this.setState({ m1: true });
      }
    } else if (val == "M2") {
      if (this.state.m2) {
        m.splice(m.indexOf("M2"), 1);
        this.setState({ m2: false });
      } else {
        m.push("M2");
        this.setState({ m2: true });
      }
    } else {
      if (this.state.m3) {
        m.splice(m.indexOf("M3"), 1);
        this.setState({ m3: false });
      } else {
        m.push("M3");
        this.setState({ m3: true });
      }
    }
    // console.log(this.state.x1);

    this.setState({ m: m });
    this.props.getData("M", m);
  };
  render() {
    return (
      <div className="Question">
        <h3>Mức giá sản phẩm ? </h3>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_M1" name="M" onChange = {()=>this.check('M1')}/>
          <label htmlFor="_M1" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_M1" className="content">
            Thấp (dưới 200k)
          </label>
        </div>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_M2" name="M" onChange = {()=>this.check('M2')}/>
          <label htmlFor="_M2" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_M2" className="content">
            Trung bình (từ 200k đến 400k)
          </label>
        </div>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_M3" name="M" onChange = {()=>this.check('M3')}/>
          <label htmlFor="_M3" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_M3" className="content">
            Cao (trên 400k)
          </label>
        </div>
      </div>
    );
  }
}

export default Question5;
