import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import Question from "./component/Question";
import Advisory from "./component/Advisory";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import sanPham from "./connectFirebase/Connect";
import Question6 from "./component/Question6";
import Admin from "./component/Admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPham: [],
      ketQua: [],
      tieuChi: {
        V: "",
        D: "",
        T: "",
        L: [],
        M: [],
        X: [],
      },
    };
  }

  componentWillMount() {
    var dsSanPham = [];
    sanPham.ref("SanPham").on("value", (sp) => {
      // sp.val();
      // console.log(sp);

      sp.forEach((value) => {
        // console.log(value.val());
        dsSanPham.push(value.val());
      });
      this.setState({
        sanPham: dsSanPham,
      });
    });
  }
  componentDidMount = () => {
    // this.tuVan('V11','D1','T1','M1','L1','X1');
  };
  getData = (type, value) => {
    let tieuChi = this.state.tieuChi;
    tieuChi[type] = value;
    this.setState({ tieuChi: tieuChi });
    // console.log(tieuChi);
  };
  tuVan = () => {
    // console.log("aaa");

    let result = [];
    this.state.sanPham.map((value, key) => {
      if (value.tieuChi.V == this.state.tieuChi.V) {
        if (value.tieuChi.D.search(this.state.tieuChi.D) !== -1) {
          if (value.tieuChi.T.search(this.state.tieuChi.T) !== -1) {
            this.state.tieuChi.M.map((m) => {
              if (value.tieuChi.M == m) {
                this.state.tieuChi.L.map((l) => {
                  if (value.tieuChi.L == l) {
                    this.state.tieuChi.X.map((x) => {
                      // console.log(x);

                      if (value.tieuChi.X == x) {
                        result.push(value);
                      }
                    });
                  }
                });
              }
            });
          }
        }
      }
    });
    // console.log(result);

    this.setState({
      ketQua: result,
    });
  };
  render() {

    // console.log(sanPham.ref('tu-van-da-mat/SanPham'));
    // console.log(this.state.sanPham);
    // console.log(this.state.ketQua);

    return (
      <div className="App">
        <Header />
        {/* <Question6/> */}
        {/* <button onClick={() => this.tuVan("V2", "D2", "T2", "M2", "L2", "X2")}>
          Show kq
        </button> */}
        <Router>
            
          <Route exact path="/" component={Home} />
            
          <Route
            path="/tu-van"
            render={() => {
              return (
                <Question
                  getData={(type, value) => this.getData(type, value)}
                  tuVan =  {()=>this.tuVan()}
                />
              );
            }}
          />
            <Route path="/admin" component={Admin}/>
          <Route path="/ket-qua-tu-van" render={()=>{return <Advisory dsSanPham={this.state.ketQua}/>}} />
        </Router>
        
        {/* <Advisory/> */}
      </div>
    );
  }
}

export default App;
