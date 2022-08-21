import React, { FC } from 'react';
import './LatestCard.css';
import {Blog} from "../../interfaces/Blog";

interface LatestCardProps {
    blog:Blog;
}

const LatestCard= (props:LatestCardProps) => (
  <div className={` m-4 w-[18rem] hover:drop-shadow-md`}>
          <div className={"h-[10rem]  bg-gray-200 rounded-t-xl overflow-hidden relative"}>
              <img src={props.blog.imageURL} className={"hover-image h-[10rem] w-[18rem] hover:scale-150"}/>
              <div className={"hover-backdrop hover:bg-gray-700/40 h-[10rem] w-full absolute top-0 left-0"}>
            </div>
      </div>
          <div className={"bg-white p-6 h-[8rem]  w-full overflow-hidden truncate flex flex-col rounded-b-xl"}>
              <p className={"text-base basis-[4rem] text-gray-800 font-bold truncate"}>{props.blog.title}</p>
              <p className={"text-xs basis-[1rem] text-gray-400 font-semibold"}>{props.blog.createdDate}</p>
          </div>
  </div>
);

export default LatestCard;
