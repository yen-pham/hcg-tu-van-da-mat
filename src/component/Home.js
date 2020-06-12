import React, { Component } from "react";
import "./Home.css";
import "./Advisory.css"

class Home extends Component {
  routeChange = () =>{ 
    // let path = `/`; 
    // history.push(path);
    window.location.href="/tu-van";

  }
  render() {
    return (
      <div>
        <h1> Các thành viên trong nhóm : </h1>
      <div className="intro">
        <div className="row ">
          <div className="col-sm-6 profile">
            {/* normal */}
            <div className="ih-item circle effect3 left_to_right">
              <a href="https://www.facebook.com/profile.php?id=100008163309804">
                <div className="img">
                  <img
                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/101057587_2672142623067822_2792856987358986240_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=nl2UR0L_CssAX-BhJHD&_nc_ht=scontent.fsgn2-1.fna&oh=3686b8bdad4ad1eeb16ce3cc0ca35d17&oe=5F01E4D6"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Đào Thị Lan Anh</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end normal */}
          </div>
          <div className="col-sm-6 profile">
            {/* colored */}
            <div className="ih-item circle  effect3 left_to_right">
              <a href="https://www.facebook.com/profile.php?id=100013550711096">
                <div className="img">
                  <img
                    src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/102968010_259811755436882_4555263104095535818_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=uGiPbpUbVvwAX_decjT&_nc_ht=scontent.fdad3-2.fna&oh=5a5dde2be23b4e154b3db428bf81399d&oe=5F0443B0"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Phạm Thị Yến</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end colored */}
          </div>
        
          <div className="col-sm-6 profile">
            {/* colored */}
            <div className="ih-item circle effect3 left_to_right">
              <a href="https://www.facebook.com/profile.php?id=100011696627748">
                <div className="img">
                  <img
                    src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.15752-9/103100480_2753481228218862_5390481075628559287_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=6jYgVpvyGdMAX-c0r1q&_nc_ht=scontent.fdad7-1.fna&oh=464947f72f4c79e510b75da5bc0e977b&oe=5F03D075"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Võ Thị Cẩm Linh</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end colored */}
          </div>
        
          <div className="col-sm-6 profile">
            {/* colored */}
            <div className="ih-item circle  effect3 left_to_right">
              <a href="https://www.facebook.com/doan.ly.144">
                <div className="img">
                  <img
                    src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/104038637_253456422576511_1402912145922209648_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=8TNiBMF6SQIAX_jMCil&_nc_ht=scontent.fdad3-2.fna&oh=f76c62d7bab01f5be1720d10fdac228a&oe=5F030BA3"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Doãn Thị Ánh Ly</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end colored */}
          </div>
        
          <div className="col-sm-6 profile">
            {/* colored */}
            <div className="ih-item circle  effect3 left_to_right">
              <a href="https://www.facebook.com/profile.php?id=100008175303057">
                <div className="img">
                  <img
                    src="https://scontent.fdad7-1.fna.fbcdn.net/v/t1.15752-9/103100482_249876016243787_5429941519434232538_n.jpg?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=cUpV3TJAprYAX8bOKgW&_nc_ht=scontent.fdad7-1.fna&oh=03a417aacd93ad218756cf94c2447957&oe=5F04B260"
                    alt="img"
                    // width="200px"
                  />
                </div>
                <div className="info">
                  <h3 style = {{fontSize: '14px'}}>Lê Thị Thanh Tâm</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end colored */}
          </div>
        
          <div className="col-sm-6 profile">
            {/* colored */}
            <div className="ih-item circle  effect3 left_to_right">
              <a href="https://www.facebook.com/gwiyeoun.kit">
                <div className="img">
                  <img
                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/103818976_282091406172282_3613074024920223273_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=14UVgpxKyRQAX8FvLsj&_nc_ht=scontent.fhan3-1.fna&oh=bf84ce99df33e4b04f34e3dea9b40d3c&oe=5F0480CB"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3 style = {{fontSize: '14px'}}>Lê Nguyễn Quyền Trang</h3>
                  <p>SINGLE status
                    <br/>
                    More info (Click here...)
                  </p>
                </div>
              </a>
            </div>
            {/* end colored */}
          </div>
        
        </div>
        {/* end Left to right*/}
      </div>
      <button className="button" onClick = {()=>this.routeChange()}>
          Tư Vấn
      <span></span><span></span><span></span><span></span></button>
      </div>
    );
  }
}

export default Home;
