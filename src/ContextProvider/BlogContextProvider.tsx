import {ReactNode, useState} from "react";
import {Blog} from "../interfaces/Blog";
import {BlogContext} from "../contexts/BlogContext";

export default function BlogContextProvider ({children}:{ children:ReactNode}) {
    const [blog,setBlog]=useState<Blog>()

    function create(blog:Blog) {
        localStorage.setItem("preview",JSON.stringify(blog))
        setBlog(blog);
    }

    return (
        <BlogContext.Provider value={{blog,create}}>
            {children}
        </BlogContext.Provider>
    )

}