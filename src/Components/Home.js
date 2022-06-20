import React from "react";
import img from "../img/doodle2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="cover">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6 col-xl-5 mt-5">
          <div class="covertext pt-5 top" style = {{width:"730px",textAlign:"initial"}}>
<span class="subheading">Welcome to the</span>
<h1 class="mb-4 mt-3"  style={{
                  fontSize: "65px",
                  color: "#bc931b",
                  fontWeight: "800"
                }}>Zero Plastic <span>Home</span></h1>
<p  style={{
                 
                  fontWeight: "300"
                }}>The zero waste lifestyle is all about simplifying your life by reducing your plastic waste which starts from home. It’s a way to be kinder to the planet.</p>
<p>
<Link to="/list" className="btn btn-secondary start px-5 py-3 mt-3">
Lets start
              </Link>
              <Link to="/create" className="btn btn-secondary start px-5 py-3 mt-3 ml-5" style = {{marginLeft:"10px"}}>
                    Share Ideas
                  </Link>
              </p>
  
</div>
           
          </div>
          <div class="col-lg-6 col-xl-7">
            <div class="image-container">
              <img
                src={img}
                alt=""
                className=""
                style={{
                 
                  marginRight: "-100px",
                  width: "630px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
