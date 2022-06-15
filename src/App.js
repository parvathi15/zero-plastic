import "./App.css";
import Home from "./Components/Home";
import ListDetails from "./Components/ListDetails";
import DetailPage from "./Components/DetailPage";
import CreateList from "./Components/CreateList";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <Navbar />
          <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={ListDetails} />
        <Route path="/detailpage/:id" component={DetailPage} />
        <Route path="/create" component={CreateList} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
