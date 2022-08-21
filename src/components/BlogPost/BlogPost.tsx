import React, {FC, useContext} from 'react';
import styles from './Blog.module.css';
import {Blog} from "../../interfaces/Blog";
import TitleCard from "../TitleCard/TitleCard";
import 'react-quill/dist/quill.snow.css';
import {useParams} from "react-router-dom";

interface BlogProps {

}

const BlogPost= () => {
    const {id} = useParams<"id">();
    const dataset:Blog[]=JSON.parse(localStorage.getItem("content-blog-api")!) as Blog[];
    const data:Blog=dataset[parseInt(id!)]
    return (
        <div className={"w-[980px] flex flex-col ml-auto mr-auto"}>
            <TitleCard title={data.title} date={data.createdDate} imageURL={data.imageURL}/>
            <div className={"w-full border-b-2 border-[#d5d5d5]"}></div>
            <div dangerouslySetInnerHTML={{__html:data.content}}
                 className={"mt-4"}></div>
        </div>
    )
};

export default BlogPost;
