import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import LatestCard from "./components/LatestCard/LatestCard";
import TitleCard from "./components/TitleCard/TitleCard";
import QuillEditor from "./components/QuillEditor/QuillEditor";
import {Outlet} from "react-router-dom";
import BlogPreview from "./components/BlogPreview/BlogPreview";

function App() {
  return (
    <div className="App flex flex-col">
        <NavigationBar/>
        {/*<LatestCard/>*/}
        {/*<TitleCard/>*/}
        {/*<BlogPreview blog={{title:"testing",content:"test",createdDate:new Date().toLocaleString(),bannerPath:"test"}}/>*/}
        <Outlet/>
    </div>
  );
}

export default App;
