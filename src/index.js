import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/mainPage/mainPage";
import News from "./components/secondPage/SecondPage.js";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider Provider store={store}>
        <App>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/news" element={<Main />} />
            <Route path="/news/page/:id" element={<Main />} />
            <Route path="/news/search" element={<Main />} />
            <Route path="/news/:id" element={<News />} />
          </Routes>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
