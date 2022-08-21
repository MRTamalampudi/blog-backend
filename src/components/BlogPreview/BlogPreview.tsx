import React, {FC, useContext, useState} from 'react';
import styles from './BlogPreview.module.css';
import {Blog} from "../../interfaces/Blog";
import TitleCard from "../TitleCard/TitleCard";
import 'react-quill/dist/quill.snow.css';
import {BlogContext} from "../../contexts/BlogContext";

interface BlogPreviewProps {

}

const BlogPreview = () => {
    const context=JSON.parse(localStorage.getItem("preview")!) as Blog;
    return (
        <div className={"w-[980px] flex flex-col ml-auto mr-auto"}>
            <TitleCard title={context.title} date={context.createdDate} imageURL={context.imageURL}/>
            <div className={"w-full border-b-2 border-[#d5d5d5]"}></div>
            <div dangerouslySetInnerHTML={{__html:context.content}}
            className={"mt-4"}></div>
        </div>
    )
};

export default BlogPreview;
