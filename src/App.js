import "./App.css";
import Home from "./Componets/Home";
import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./Componets/Blog";
import OrderSummery from "./Componets/OrderSummery";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/order-summery">
            <OrderSummery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
