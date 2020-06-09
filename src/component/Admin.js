import React, { Component } from "react";
import sanPham from "../connectFirebase/Connect";


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state={
      ten:'',
      thuongHieu:'',
      xuatXu:'',
      gia:'',
      anh:'',
      moTa:'',
      V:'',
      D:'',
      T:'',
      L:'',
      M:'',
      X:''

    }
  }
  onChange =(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    this.setState({
      [name]:value
    });
  }
  them=()=>{
  let  temp={
      ten:this.state.ten,
      thuongHieu:this.state.thuongHieu,
      xuatXu:this.state.xuatXu,
      gia:this.state.gia,
      anh:this.state.anh,
      moTa:this.state.moTa,
      tieuChi:{
        V:this.state.V,
        T:this.state.T,
        D:this.state.D,
        L:this.state.L,
        M:this.state.M,
        X:this.state.X,

      }
    }
    sanPham.ref("SanPham").push(temp);
    alert('Thêm thành công!!!!');
    this.setState({
      ten:'',
      thuongHieu:'',
      xuatXu:'',
      gia:'',
      anh:'',
      moTa:'',
      D:'',
      T:'',
      L:'',
      M:'',
      X:''
    });
  }
  render() {
    console.log(this.state);
    
    return (
      <div>
            <label>Tên:</label>
            <input name='ten' style={{width:"50%", height:"40px",marginBottom:'30px'}} onChange={(event)=>this.onChange(event)}/> <br/>
            <label>thương hiệu:</label>
            <input name='thuongHieu'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>xuất xư:</label>
            <input name='xuatXu'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>anh:</label>
            <input name='anh'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>gia:</label>
            <input name='gia'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>mô tả:</label>
            <input name='moTa'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>Vấn đề (V):
            </label>
            <input name='V' style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>loại da(D):
            hỗn hợp-D1 khô-D2 thường-D3  nhờn-D4  nhạy cảm-D5 trưởng thành-D6
            </label><br/>
            <input name='D'style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>Tuổi(T):</label>
            <input name='T' style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>Loại mĩ phẩm (L):</label>
            <input name='L' style={{width:"50%", height:"40px",marginBottom:'30px'}} onChange={(event)=>this.onChange(event)}/> <br/>
            <label>Mức sản Phẩm (M):</label>
            <input name='M' style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <label>Xuất xứ (X):</label>
            <input name='X' style={{width:"50%", height:"40px",marginBottom:'30px'}}onChange={(event)=>this.onChange(event)}/> <br/>
            <button onClick={()=>this.them()}>THÊM</button>
      </div>
    );
  }
}

export default Admin;
