import React, { Component } from "react";
import zerowaste from "../img/label.png";
import axios from "axios";
import { Link } from "react-router-dom";
class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      list: [],
      alternatives:[],
      loading: true,
      display: "none",
      statusmsg:""
    };
    // var display = false;

    this.onChangeSearchterm = this.onChangeSearchterm.bind(this);
    this.getdata = this.getdata.bind(this);
  }

  onChangeSearchterm(e) {
    e.preventDefault();
    this.setState({
      searchterm: e.target.value
    });
  }

  getdata = async e => {
    e.preventDefault();
      var term="";
      if(this.state.searchterm){
        term=this.state.searchterm.toString().toLowerCase();
      }
    
    axios
      .get(`https://whispering-chamber-66906.herokuapp.com/title/${term}`)
      .then(response => {
        this.setState({ list: response.data });
        this.setState({ display: "flex" });
        if(this.state.list.length === 0 && this.state.searchterm !== "") {
          this.setState({ statusmsg: "No Results" });
        } else {
          this.setState({ statusmsg: "" });
        }
        })
       .catch(error => {
        this.setState({ display: "none" });
        
     });
    
  };

  render() {
    return (
      <div class="add_notes mt-5 pt-4">
        <div class="add mb-5 mt-2">
          <div class="container mt-2">
            <div class="col-xs-10 mt-2">
              <div class="addnotes-feedback pl-4 ml-2">
                <div class="content">
                  <img src={zerowaste} alt="" className="mr-5 mt-2" />
                  <div
                    classN="content ml-5"
                    style={{ display: "table", marginLeft: "15px" }}
                  >
                    <h2 style = {{textAlign:"initial"}}> Let’s start your zero waste journey with us.</h2>
                    <p style = {{textAlign:"initial"}}>
                   
                    Here we helps you to find the eco friendly alternatives to reduce plastic waste in your home.
                   </p>
                  </div>
                </div>
              </div>
              <div className="enter">
                <div class="container mt-1">
                  <form method="POST" action="#" class="mt-1" onSubmit={this.getdata}>
                    <div class="row mt-5">
                      <div class="col-md-8 mt-1" style={{ margin: "0 auto" }}>
                        <input
                          className="denorious_name"
                          name="search"
                          type="text"
                          placeholder="Find the Alternative"
                          onChange={this.onChangeSearchterm}
                          value={this.state.searchterm}
                        />
                        <span>
                          <i
                            class="fa fa-search form-control-feedback"
                            style={{
                              position: "relative",
                              top: "-50px",
                              right: "44px",
                              float: "right",
                              fontSize: "21px",
                              fontWeight: "400",
                              color: "#b8d282" 
                              // transform: "translateY(-50%)"
                            }}
                          ></i> 
                       </span>
                        <span
                          class="hint"
                          style={{
                            float: "left",
                            color: "#1f5a26",
                            fontSize: "15px"
                          }}
                        >
                          For example enter plastic cover and you get the
                          alternative
                        </span>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="py-5">
                   
                      <div class="container">
                        <p style = {{fontSize: "x-large",color: "#6aa140"}}>{this.state.statusmsg}</p>
                      {/* {this.state.list.length === 0 && this.state.searchterm !== "" ?(
                      <p>No Results</p>
                      ):(
                      null
                      )} */}
                     <div class="row hidden-md-up" style={{ display: this.state.display }}>
                       
                        {this.state.list.
                        map((cocktail, key) => {
                          return (
                          <div class="col-md-4 offset-md-1">
                            <div class="card">
                              <div class="card-block">
                               
                                <img
                      src={`https://whispering-chamber-66906.herokuapp.com/${cocktail.filePath}`}
                      height="380" width = "auto"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                     <h4 class="card-title mt-2">{cocktail.alternative}</h4>
                                {/* <p class="card-text">
                                {cocktail.description}
                                </p> */}

                     <Link className="btn detail mb-3"
                      to={{
                        pathname: `/detailpage/${cocktail._id}`,
                        state: { id: cocktail._id }
                      }}
                      
                    >
                      Details
                    </Link>

                                {/* <a href="#" class="btn detail mb-3">
                                  Details
                                </a> */}
                              </div>
                            </div>
                          </div>
                            );
                          })}
                         
                   
                        </div>
                      </div>
                  
                    </div>
                  </div>
                  {/* ************* */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowList;
