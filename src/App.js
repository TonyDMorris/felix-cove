import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { Nav } from "./components/Nav";
import BasketContext from "./context/BasketContext";
function App() {
  const [items, setItems] = useState([]);

  return (
    <BasketContext.Provider value={{ items, setItems }}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </BasketContext.Provider>
  );
}

export default App;
