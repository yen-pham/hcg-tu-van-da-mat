import React, { Component } from "react";
import './Question.css'

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state={
      l : [],
      l1 : false,
      l2 : false
    }
  }
  check =(val)=>{
    let l=[];
    if(this.state.l2){l.push('L2')};
    if(this.state.l1){l.push('L1')}

    // console.log(val);
    if(val=='L1'){
      
      if(this.state.l1){
        this.setState({l1: false});
        l.splice(l.indexOf('L1'),1);
      }
      else {
        l.push('L1');
        this.setState({l1: true});}

    }
     else {if(this.state.l2){
      l.splice(l.indexOf('L2'),1);
      this.setState({l2: false});
    }
    else {
      l.push('L2');
      this.setState({l2: true});}
    }
    // console.log(this.state.x1);
    
    this.setState({l:l});
    this.props.getData('L',l);
  }
  render() {
    return (
      <div className="Question">
        <h3>Bạn muốn sử dụng loại mỹ phẩm nào ? </h3>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_L1" name="L" onChange = {()=>this.check('L1')}/>
          <label htmlFor="_L1" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_L1" className="content">Hoàn toàn tự nhiên</label>

        </div>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_L2" name="L" onChange = {()=>this.check('L2')}/>
          <label htmlFor="_L2" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_L2" className="content">Có chứa thành phần hóa học</label>

        </div>
        
      </div>
    );
  }
}

export default Question4;
