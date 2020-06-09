import React, { Component } from "react";
import './Question.css';

class Question2 extends Component {
  check = (val) => {
    this.props.getData('D',val);
  };
  render() {
    return (
      <div className="Question">
        <h3>Da của bạn thuộc loại gì ? </h3>
        <img src="https://muathuoc24h.com/profiles/muathuoc24hcom/uploads/attach/post/images/cach-phan-biet-cac-loai-da.jpg"/>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D1" name="D"  onChange={() => this.check("D1")} />
          <label htmlFor="_D1" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D1" className="content">Da hỗ hợp</label>
          <p>Một sự kết hợp của hai loại da: da bình thường đến da khô và da dầu, da mụn. Da hỗn hợp tỏa sáng và có xu hướng phát triển các nhược điểm nhỏ - đặc biệt là trong vùng gọi là T-zone giữa trán, mũi và cằm. Ngược lại, khu vực má là bình thường đến khô.</p>

        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D2" name="D"  onChange={() => this.check("D2")}/>
          <label htmlFor="_D2" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D2" className="content">Da khô</label>
            <p>Da khô không có độ ẩm và lipids - ví dụ như chất béo, vì vậy nó ít bị đàn hồi, căng chặt, trong nhiều trường hợp, có khuynh hướng ngứa, nó phản ứng với các ảnh hưởng của môi trường đặc biệt bằng cách trở nên khó chịu.
</p>
        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D3" name="D"  onChange={() => this.check("D3")}/>
          <label htmlFor="_D3" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D3" className="content">Da thường</label>
          <p>Da đàn hồi tốt và mềm mại, mịn màng và một làn da hồng hào: nếu đó là những gì bạn nhìn thấy khi bạn nhìn vào gương, thì bạn có làn da bình thường thậm chí phạm tội về vẻ đẹp, thỉnh thoảng sẽ không làm tổn hại đến nó nhiều.</p>
        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D4" name="D"  onChange={() => this.check("D4")} />
          <label htmlFor="_D4" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D4" className="content">Da nhờn</label>
          <p>Một làn da mụn cóc có khuynh hướng tạo ra nhiều bã nhờn hơn là cần thiết.Mỗi khuynh hướng di truyền, căng thẳng và sự dao động của hoóc môn gây ra hậu quả như vậy: kết quả là mụn đầu đen và vết thâm xuất hiện.</p>
        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D5" name="D"  onChange={() => this.check("D5")}/>
          <label htmlFor="_D5" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D5" className="content">Da nhạy cảm</label>
          <p>Da nhạy cảm phản ứng nhiều hơn với các ảnh hưởng bên ngoài như căng thẳng, không khí khô từ hệ thống sưởi ấm hoặc ánh sáng tia cực tím. Nếu da bị tróc ra, nó sẽ cảm thấy thắt chặt, ngứa, khô và nổi đỏ.
</p>
        </div>
        <div className="reply">
          <input type="radio" className="checkbox" id="_D6" name="D"  onChange={() => this.check("D6")}/>
          <label htmlFor="_D6" className= "tick">
            <div id="tick_mark" />
          </label>
          <label htmlFor="_D6" className="content">Da Trưởng thành</label>
          <p>Khi chúng ta lớn lên, nhiều quá trình khác nhau diễn ra trong da làm thay đổi hình dạng, cấu trúc và các hoạt động của nó, bao gồm hoạt động của tế bào giảm, phục hồi chậm lại, sản sinh collagen thấp hơn hoặc thiệt hại do tia UV gây ra và độ đàn hồi kém đi. 
</p>
        </div>
      </div>
    );
  }
}

export default Question2;
