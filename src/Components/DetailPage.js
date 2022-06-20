import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
   console.log(props);
    this.state = {
      alternative: []
    };
  }
  
  componentDidMount = async () => {
    const id = this.props.location.state.id;
    const req = await fetch(`https://zerowaste-api.herokuapp.com/api/${id}`);
    const res = await req.json();
    
    this.setState({ alternative: res });
  };
  
  render() {
    const des = this.state.alternative;
   
    return (
      <div className="container">
        <div className="active-cocktail" style={{ textAlign: "left" }}>
          <h2 className="mt-5" style={{ paddingTop: "64px",textTransform:"capitalize" }}>
          {des.alternative}
          </h2>
          <img
            className="active-cocktail__img mt-3"
            src={`https://zerowaste-api.herokuapp.com/${des.filePath}`}
          />
           <p className="mt-3 mb-3 pl-5 text-black">
            <span className="title-data">Alternative for</span>
            :{des.title}
          </p>
          <div class="col-sm-8">
            <p className="mt-4">
            {des.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
