import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QuillEditor from "./components/QuillEditor/QuillEditor";
import BlogContextProvider from "./ContextProvider/BlogContextProvider";
import BlogPreview from "./components/BlogPreview/BlogPreview";
import HomePage from "./components/HomePage/HomePage";
import Blog from "./components/BlogPost/BlogPost";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BlogContextProvider>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App />}>
                  <Route path={"new_blog"} element={<QuillEditor/>} />
                  <Route path={"preview"} element={<BlogPreview/>} />
                  <Route path={"home"} element={<HomePage/>}/>
                  <Route path={"blog/:id"} element={<Blog/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
      </BlogContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
