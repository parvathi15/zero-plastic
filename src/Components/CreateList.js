import React, { Component } from 'react';
import axios from "axios";

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
    console.log(formData);
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
        <h3 className="mb-5">Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3 mt-2"
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="searchValue"
              placeholder="title"
            />

            <textarea
              className="form-control mb-3 mt-4"
              value={this.state.description}
              onChange={this.onChangeDescription}
              placeholder="description"
            />

            <input
              type="text"
              className="form-control mb-3 mt-4"
              value={this.state.alternative}
              onChange={this.onChangeAlt}
              placeholder="Alternative"
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
              value="Create Todo"
              className="btn btn-primary mt-2"
            />
          </div>
        </form>
        <p>{this.state.message}</p>
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
