import React, { FC } from 'react';
import styles from './TitleCard.module.css';

interface TitleCardProps {
    title?:string;
    date?:string;
    imageURL?:string;
}

const TitleCard= (props:TitleCardProps) => (
  <div className={`${styles.TitleCard} flex m-4 ml-10 w-[900px]  h-[8rem] rounded-l-xl`}>
      <div className={"image-container bg-gray-200 w-[900px] h-[100%] relative"}>
            <img src={props.imageURL} className={"h-[8rem] w-[900px] rounded-xl"}/>
          <div className={"p-6 flex flex-col absolute top-0 left-0 rounded-xl backdrop-blur-sm bg-gray-900/50 w-full"}>
              <p className={"text-base basis-[4rem] text-white font-bold truncate..."}>{props.title}</p>
              <p className={"text-xs basis-[1rem] text-white font-semibold"}>created on {props.date}</p>
          </div>
      </div>
  </div>
);

export default TitleCard;
