import React, { Component } from "react";
import './Question.css'

class Question6 extends Component {
constructor(props) {
  super(props);
  this.state={
    x : [],
    x1 : false,
    x2 : false
  }
}

  check =(val)=>{
    let x=[];
    if(this.state.x2){x.push('X2')};
    if(this.state.x1){x.push('X1')}

    // console.log(val);
    if(val=='X1'){
      
      if(this.state.x1){
        this.setState({x1: false});
        x.splice(x.indexOf('X1'),1);
      }
      else {
        x.push('X1');
        this.setState({x1: true});}

    }
     else {if(this.state.x2){
      x.splice(x.indexOf('X2'),1);
      this.setState({x2: false});
    }
    else {
      x.push('X2');
      this.setState({x2: true});}
    }
    // console.log(this.state.x1);
    
    this.setState({x:x});
    this.props.getData('X',x);
  }
  render() {
    // console.log(this.state.x);
    // console.log(this.props.name);
    
    return (
      <div className="Question">
        <h3>Nguồn gốc xuất sứ của sản phẩm ở đâu ? </h3>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_X1" name="X" value='X1' onChange = {()=>this.check('X1')} />
          <label htmlFor="_X1" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_X1" className="content">Châu Á</label>

        </div>
        <div className="reply">
          <input type="checkbox" className="checkbox" id="_X2" name="X" value='X2' onChange = {()=>this.check('X2')} />
          <label htmlFor="_X2" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_X2" className="content">Châu Âu</label>

        </div>
        
      </div>
    );
  }
}

export default Question6;
