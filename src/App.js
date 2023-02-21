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
          <div className="d-flex bg-white app-header-zoho justify-content-between">
            <div className="ms-3">
              <img className="app-logo" alt="" src="/img/AppLogo.png"></img>
            </div>
            <div className="d-flex align-items-center fs-3">
              Welcome to Zoho Cinemas....!
            </div>

            <div className="d-flex align-items-center me-5">
              <div className="justify-content-end me-3"> Welcome Arun!</div>
              <Link to="/">Home</Link>
            </div>
          </div>

          {/* <img alt="" src="../img/cinema-tickets-3d-glasses.jpg"></img> */}
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
