import React, { Component } from 'react';
import "./Button.css";
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import { Redirect } from 'react-router-dom';

var question = null;
class Question extends Component {
  constructor(props) {
    super(props);
    this.state={
      indexQuestion : 1,
      tieuChi : {}
    }
  }
 
  questionShow =()=>{
    switch (this.state.indexQuestion) {
      case 1:
        question = <Question1 getData={(type,value)=>this.props.getData(type,value)}/>
        break;
      case 2:
        question = <Question2 getData={(type,value)=>this.props.getData(type,value)}/>
        break;
      case 3:
        question = <Question3 getData={(type,value)=>this.props.getData(type,value)}/>
        break;
      case 4:
        question = <Question4 getData={(type,value)=>this.props.getData(type,value)}/>
        break;
      case 5:
        question = <Question5 getData={(type,value)=>this.props.getData(type,value)}/>
        break;
      case 6:
        question = <Question6  getData={(type,value)=>this.props.getData(type,value)}/>
        break;
    
      default:
        break;
    }
  } 
  buttonClick =()=>{
    if(this.state.indexQuestion!==7){
      if(this.state.indexQuestion==6){
        this.props.tuVan();
      }
      this.setState(
        {
          indexQuestion:this.state.indexQuestion + 1
        }
      );
    } else {
      this.setState(
        {
          indexQuestion: 1
        }
      // <Redirect to="/tu-van">
      );
    }
  }
  render() {
    this.questionShow();
    if(this.state.indexQuestion!==7) return (
      <div>
        {question}
        {/* button next */}
        <div className= "buttonNext">
        <button className="button" onClick= {()=>this.buttonClick() }>
      {this.state.indexQuestion !==6? 'Tiếp theo': 'Tư vấn'}
      <span></span><span></span><span></span><span></span>
    </button>
      </div>
      </div>
      
    );
    else return (<Redirect to="/ket-qua-tu-van" />);
  }
}

export default Question;