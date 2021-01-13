import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import NavBar from "./NavBar/NavBar";
import SoundsPage from "./Pages/SoundsPage/SoundsPage";
import CartPage from "./Pages/CartPage/CartPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import cartReducer from "./store/reducers/cart";
import soundsReducer from "./store/reducers/sounds";

import "./App.css";

const rootReducer = combineReducers({
  cart: cartReducer,
  sounds: soundsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <div className="container">
            <NavBar />
            <Redirect to="/sounds" />
            <Route path="/sounds" component={SoundsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
