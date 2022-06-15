import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      list: [],
      loading: true,
      display: "none"
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

  componentDidMount() {
    // var display = false;
  }

  getdata = async e => {
    e.preventDefault();
    // const url = `http://localhost:8000/desc/${this.state.searchterm}`;
    // console.log(url);
    // const api_call = await fetch(url);
    // console.log(api_call);
    // const data = await api_call.json();
    // this.setState({
    //   list: data
    // });
    axios
      .get(`https://zerowaste-api.herokuapp.com/desc/${this.state.searchterm}`)
      .then(response => {
        // this.state.list.push(response.data);
        this.setState({ list: response.data });
        this.setState({ display: "block" });
        console.log(this.state.list);
      })
      .catch(error => {
        this.setState({ display: "none" });
        console.log(error);
      });
  };

  render() {
    console.log(this.state.list);
    return (
      <div className="container mt-3 ml-5">
        <form
          style={{ display: "flex", margin: "40px auto", marginLeft: "83px" }}
        >
          <input
            type="text"
            className="form-control"
            style={{ width: "70%" }}
            value={this.state.searchterm}
            onChange={this.onChangeSearchterm}
          />
          <button className="btn btn-primary" onClick={this.getdata}>
            search
          </button>
        </form>
        <div className="container mt-3 ml-5">
          <div class="row" style={{ display: this.state.display }}>
            {this.state.list.map((cocktail, key) => {
              return (
                <div class="col-md-8" style={{ marginBottom: "2rem" }}>
                  <div className="img-container">
                    <h4 className="mt-2 mb-5">{cocktail.title}</h4>
                    <img
                      src={`https://zerowaste-api.herokuapp.com/${cocktail.filePath}`}
                      height="200"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                    <p
                      className="mt-2"
                      style={{ letterSpacing: "3px", color: "#615f5f" }}
                    >
                      {cocktail.alternative}
                    </p>
                    <Link
                      to={{
                        pathname: `/detailpage/${cocktail._id}`,
                        state: { id: cocktail._id }
                      }}
                    >
                      DETAILS
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ListDetails;

