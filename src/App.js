import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { Nav } from "./components/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
