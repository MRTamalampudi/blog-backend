import React, { FC } from 'react';
import styles from './NavigationBar.module.css';
import {Strings} from "../../config/strings";
import {Link} from "react-router-dom";

interface NavigationBarProps {}

const NavigationBar=() => (
    <div className={"h-[3rem]"}>
  <div className={`h-[3rem] bg-white/20 flex flex-col items-center justify-center backdrop-blur-md w-full fixed z-10`}>
      <div className={"w-[980px] ml-auto mr-auto flex justify-between"}>
          <p className={"font-semibold text-lg text-gray-800"}>{Strings.APP_NAME}</p>
          <div className={"text-sm text-gray-700 flex space-x-4 items-center"}>
              <Link to={"/home"}>
                  <p>Home</p>
              </Link>
              <Link to={"/new_blog"}>
                  <p>New blog</p>
              </Link>
          </div>
      </div>
      <hr/>
  </div>
    </div>
);

export default NavigationBar;
