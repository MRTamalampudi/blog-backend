import {createContext} from "react";
import {Blog} from "../interfaces/Blog";

interface BlogContextType{
    blog:Blog | undefined;
    create: (blog:Blog)=>void;
}

export const BlogContext = createContext<BlogContextType>({
    create(blog: Blog): void {},
    blog: undefined
})
