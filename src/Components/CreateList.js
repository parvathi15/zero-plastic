import React, { Component } from 'react';
import axios from "axios";
import poster from "../img/earth2.png";
import idea from "../img/idea.png";
import community2 from "../img/community2.png";

const apiUrl = "https://zerowaste-api.herokuapp.com/api/";

class CreateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternative: "",
      title: "",
      description: "",
      image: "",
      list: [],
      message: "",
      alert: { show: false }
    };
    this.timerId = null;
    this.fileInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeAlt = this.onChangeAlt.bind(this);
  }
  onChangeAlt = e => {
    this.setState({
      alternative: e.target.value
    });
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  onChangeImage = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  // onChangeAlert = ({ type, text }) => {
  //   this.setState({
  //     show: true,
  //     type,
  //     text
  //   });
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 3000);
  // };

  singleFileUpload = async (data, options) => {
    try {
      await axios.post(apiUrl + "singleFile", data, options);
    } catch (error) {
      throw error;
    }
  };

  resetMessage() {
    this.timerId = setTimeout(() => {
      this.setState({
        message: ""
      });
      this.timerId = null;
    }, 2000);
  }
  onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.image);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("alternative", this.state.alternative);
    this.singleFileUpload(formData);
    
    if (
      this.state.title !== "" &&
      this.state.description !== "" &&
      this.state.alternative !== ""
    ) {
      this.setState({
        message: "Data submitted Successfully."
      });
      this.resetMessage();
    } else {
      this.setState({
        message: "Invalid Data"
      });
      this.resetMessage();
    }
    this.setState({
      title: "",
      description: "",
      alternative: "",
      image: (this.fileInput.current.value = "")
    });
  };
  render() {
    console.log(this.state.message);
    return (
      <div style={{ marginTop: 20 }} className="container">
      <div class="add_notes mt-5 pt-4">
        <div class="add mb-5 mt-2">
          <div class="container mt-2">
            <div className="row">
              <div class="col-xs-3 mt-2">
                <div class="sharenotes-feedback pl-4 ml-2">
                  <div class="content">
                    <img src={community2} alt="" className="mr-5 mt-2" />
                    <div
                      className="content ml-5"
                      style={{ textAlign: "initial", marginLeft: "15px" }}
                    >
                      <h2>Share your Alternatives with us.</h2>
                      <p>Making small changes and adjusting our habits to create less waste makes a positive impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                  <div class="col-sm-9 feedback_content mt-3 mb-4">
        <form onSubmit={this.onSubmit}  className="form-horizontal mt-4 mb-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3 mt-2"
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="searchValue"
              placeholder="Enter Title"
            />

            <textarea
              className="form-control mb-3 mt-4"
              value={this.state.description}
              onChange={this.onChangeDescription}
              placeholder="Enter Description"
              rows="5"
            />

            <input
              type="text"
              className="form-control mb-3 mt-4"
              value={this.state.alternative}
              onChange={this.onChangeAlt}
              placeholder="Enter Alternative"
            />
            <input
              type="file"
              className="form-control mb-3 mt-4"
              onChange={this.onChangeImage}
              ref={this.fileInput}
              placeholder="Image"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary pl-2 pr-2 mt-2"
              style={{ background: "#243e27", fontSize: "16px" }}
            />
          </div>
        </form>
        {this.state.message === "Invalid Data" ?(
        <p className = "notifymsg">{this.state.message}</p>
        ):(
          <p className="successmsg">{this.state.message}</p> 
       )}
      </div>
      <div class="col-sm-3">
                    <div class="notice-box text-center mt-5 pb-5 ml-5">
                      <img src={poster} alt="" className="mr-5 mt-4 mb-2" />
                      <h3 class="sideheading text-center">Think Green</h3>
                      <h4 class="sideheading text-center">Save The Planet</h4>
                      <p
                        style={{ margin: "15px", letterSpacing: "2px" }}
                        className="text-white"
                      >
                       Zero waste lifestyle helps in sustainability and protecting the environment which also reduces the plastic entering 
                       oceans and landfills.
                      </p>
                    </div>
                  </div>
      </div>
       </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default CreateList;

// const newTodo = {
//   title: this.state.title,
//   description: this.state.description,
//   alternative: this.state.alternative,
//   formData
// };
// console.log(newTodo);
// axios
//   .post("http://localhost:8000/projects/add", newTodo)
//   .then(res => console.log(res.data));
