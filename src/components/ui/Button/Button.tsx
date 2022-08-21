import React, {FC, ReactElement, ReactNode} from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children:ReactNode;
    type:"primary"|"secondary"|"outline";

}

const Button= (props:ButtonProps) => {

    return (
        <button className={`
        ${props.type==="primary" && "bg-gray-600 text-white"} 
        ${props.type==="secondary" && "bg-gray-400 text-white"} 
        ${props.type==="outline" && "border  border-gray-500 text-gray-600"}  
        p-2 pl-4 pr-4 text-xs rounded uppercase`}>
            {props.children}
        </button>
    );
};

export default Button;
