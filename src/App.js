import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { Nav } from "./components/nav/Nav";
import BasketContext from "./context/BasketContext";
import "./app.css";
function App() {
  const [items, setItems] = useState([]);
  function setQuantity(id, qty) {
    if (qty <= 0) {
      setItems((prevItems) => [...prevItems.filter((item) => item.id != id)]);
    } else {
      setItems((prevItems) => {
        const newItems = prevItems.map((item) => {
          if (item.id === id) {
            item.qty = qty;
            return item;
          } else {
            return item;
          }
        });
        return [...newItems];
      });
    }
  }

  function addItem(item) {
    setItems((prevItems) => {
      if (prevItems.find((prevItem) => item.id === prevItem.id)) {
        return [
          ...prevItems.map((prevItem) => {
            if (prevItem.id === item.id) {
              prevItem.qty += 1;
              return prevItem;
            } else {
              return prevItem;
            }
          }),
        ];
      } else {
        return [...prevItems, { ...item, qty: 1 }];
      }
    });
  }
  return (
    <BasketContext.Provider value={{ items, setQuantity, addItem }}>
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
