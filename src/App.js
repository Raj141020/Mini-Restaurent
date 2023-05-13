import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurentCreate from "./components/RestaurentCreate";
import RestaurentDetail from "./components/RestaurentDetail";
import RestaurentList from "./components/RestaurentList";
import RestaurentUpdate from "./components/RestaurentUpdate";
import RestaurentSearch from "./components/RestaurentSearch";
import Login from "./components/Login";
import NavBarManu from "./components/NavBarManu";
import Protected from "./components/Protected";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarManu />
        {/* <Route path="/create">
          <RestaurentCreate />
        </Route> */}
  
        {/* <Route path="/list">
          <RestaurentList />
        </Route> */}
        {/* <Route
          path="/update/:id"
          render={(props) => <RestaurentUpdate {...props} />}
        ></Route> */}
        {/* <Route path="/search">
          <RestaurentSearch />
        </Route> */}

        <Protected exact path="/detail" Component={RestaurentDetail} />
        <Protected exact  path="/update/:id" Component={RestaurentUpdate} />
        <Protected exact path="/search" Component={RestaurentSearch} />
        <Protected exact path="/create" Component={RestaurentCreate} />
        <Protected exact path="/list" Component={RestaurentList} />

        <Protected exact path="/" Component={Home} />

        <Route path="/login" render={(props) => <Login {...props} />}></Route>

        <Route path="/logout"><Logout /></Route>
      </Router>
    </div>
  );
}

export default App;
