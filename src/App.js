import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CreateList from './Components/CreateList';
import ListDetails from './Components/ListDetails';
import DetailPage from './Components/DetailPage';
import Navbar from './Components/Navbar';
import Default from './Components/Default';
import Home from './Components/Home';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


 class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateList} />
        <Route path = "/list" component = {ListDetails} />
        {/* <Route path="/:id" render={(props) => <DetailPage {...props}/>}  element={<DetailPage />} /> */}
      <Route path = "/detailpage/:id" component = {DetailPage} />
     <Route path = "default" component = {Default} />
      </Switch>
    </React.Fragment>
    //   <div className="App">
    //     <Navbar />
    //     <Routes>
    //     <Route path="/" element={<Home />} />
    //    <Route path="create" element={<CreateList />} />
    //    <Route path = "list" element = {<ListDetails />} />
    //    {/* <Route path="/:id" render={(props) => <DetailPage {...props}/>}  element={<DetailPage />} /> */}
    //    <Route path = "detailpage/:id" element = {<DetailPage />} />
    //    <Route path = "default" element = {<Default />} />
    //     {/* <ListDetails /> */}
    //     </Routes>
    // </div>

    )
  }
}

export default App;

