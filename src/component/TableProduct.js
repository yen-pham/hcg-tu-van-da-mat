import React, { Component } from "react";
import ProductItem from "./ProductItem";


class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      product:[]
    }
  }
  
  showPro =(type)=>{
    console.log(type);
    let product=[];
    if(type=='V1'){
       this.props.sanPham.map((val,key)=>{
      if(val.tieuChi.V=='V11'||val.tieuChi.V=='V12' ) { product.push(<ProductItem sanPham={val} key= {key}/>)}
    })
    } else {
      this.props.sanPham.map((val,key)=>{
        if(val.tieuChi.V== type ) { product.push(<ProductItem sanPham={val} key= {key}/>)}
      })
    }
   this.setState({
     product:product
   });

  }
  render() {
    // console.log(this.props.sanPham);
    // console.log(this.state.product);
    
    return (
      <div>
        <button onClick={()=>this.showPro('V1')}>Chống nắng</button>
        <button onClick={()=>this.showPro('V2')}>Làm Trắng</button>
        <button onClick={()=>this.showPro('V3')}>Làm sạch da</button>
        <button onClick={()=>this.showPro('V4')}>Trị mụn, thâm sẹo</button>
        <button onClick={()=>this.showPro('V5')}>Chống lão hóa</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Xuất xứ</th>
              <th>Thương hiệu</th>
              <th>giá</th>
              <th>Ảnh</th>
              {/* <th>Mô tả</th> */}
            </tr>
          </thead>
          <tbody>
           {this.state.product}
          </tbody>
        </table>
 
      </div>
    );
  }
}

export default TableProduct;
