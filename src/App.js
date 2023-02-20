import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./cinemas/Cinemasdetails";
import ShowList from "./cinemas/Showdetails";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="mt-3">Welcome Arun!</div>
          <Link to="/">Home</Link>
          {/* <div
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </div> */}
          <Routes>
            <Route exact path="/" element={<Layout />}></Route>
            <Route exact path="/MovieList" element={<ShowList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
