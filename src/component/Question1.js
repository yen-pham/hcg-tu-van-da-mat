import React, { Component } from "react";
import "./Question.css";

class Question1 extends Component {
  check = (val) => {
    this.props.getData("V", val);
  };
  render() {
    return (
      <div className="Question">
        <h3>Vấn đề bạn quan tâm là gì ? </h3>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V11"
            name="V"
            onChange={() => this.check("V11")}
          />
          <label htmlFor="_V11" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V11" className="content">
            Chống nắng lên tone
          </label>
        </div>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V12"
            name="V"
            onChange={() => this.check("V12")}
          />
          <label htmlFor="_V12" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V12" className="content">
            Chống nắng không lên tone
          </label>
        </div>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V2"
            name="V"
            onChange={() => this.check("V2")}
          />
          <label htmlFor="_V2" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V2" className="content">
            Dưỡng trắng
          </label>
        </div>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V3"
            name="V"
            onChange={() => this.check("V3")}
          />
          <label htmlFor="_V3" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V3" className="content">
            Làm sạch da
          </label>
        </div>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V4"
            name="V"
            onChange={() => this.check("V4")}
          />
          <label htmlFor="_V4" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V4" className="content">
            Trị mụn,thâm sẹo
          </label>
        </div>
        <div className="reply">
          <input
            type="radio"
            className="checkbox"
            id="_V5"
            name="V"
            onChange={() => this.check("V5")}
          />
          <label htmlFor="_V5" className="tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_V5" className="content">
            Ngừa lão hóa
          </label>
        </div>
      </div>
    );
  }
}

export default Question1;
