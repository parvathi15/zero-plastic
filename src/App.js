import "./App.css";
// import CreateForm from "./Components/CreateForm";
import ListDetails from "./Components/ListDetails";
// import DetailPage from "./Components/DetailPage";
import CreateList from "./Components/CreateList";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={ListDetails} />
        <Route path="/create" component={CreateList} />
        {/* <Route path="/detailpage/:id" component={DetailPage} /> */}
      </Router>
    </div>
  );
}

export default App;
