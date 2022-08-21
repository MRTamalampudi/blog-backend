import React, {FC, useState} from 'react';
import styles from './HomePage.module.css';
import {Blog} from "../../interfaces/Blog";
import LatestCard from "../LatestCard/LatestCard";
import {Link} from "react-router-dom";

interface HomePageProps {}

const HomePage= () => {
    if (localStorage.getItem("content-blog-api")){
        let content:Blog[]=JSON.parse(localStorage.getItem("content-blog-api")!)
        return (
            <div className={"flex flex-col w-[960px] ml-auto mr-auto"}>
                <p className={"ml-6 text-gray-800 font-semibold mt-4 text-2xl"}>Latest Blogs</p>
                <div className={"flex flex-wrap"}>
                    {
                        content.map((blog,index:number)=>{
                            return(
                                <Link to={`/blog/${index}`}>
                                    <LatestCard blog={blog}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else{
        return (
            <div className={"w-980px m-auto mt-10"}>
                <p>There are no blogs,Plz create a blog</p>
            </div>
        )
    }

};

export default HomePage;
