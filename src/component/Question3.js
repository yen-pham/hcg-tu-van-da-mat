import React, { Component } from "react";
import './Question.css'

class Question3 extends Component {
  check = (val) => {
    this.props.getData('T',val);
  };
  render() {
    return (
      <div className="Question">
        <h3>Bạn bao nhiêu tuổi ? </h3>
        <div className="reply">
          <input type="radio" className="checkbox" id="_T1" name="T" onChange={() => this.check("T1")}/>
          <label htmlFor="_T1" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_T1" className="content">Từ 18 đến 22 tuổi</label>

        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_T2" name="T" onChange={() => this.check("T2")} />
          <label htmlFor="_T2" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_T2" className="content">Từ 22 đến 25 tuổi</label>

        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_T3" name="T" onChange={() => this.check("T3")} />
          <label htmlFor="_T3" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_T3" className="content">Từ 25 đến 40 tuổi</label>

        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_T4" name="T" onChange={() => this.check("T4")}/>
          <label htmlFor="_T4" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_T4" className="content">Trên 40 tuổi</label>

        </div>
       
      </div>
    );
  }
}

export default Question3;
