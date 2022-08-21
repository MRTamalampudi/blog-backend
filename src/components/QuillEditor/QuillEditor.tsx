import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './QuillEditor.module.css';
import ReactQuill,{Quill} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Button from "../ui/Button/Button";
import { ImageResize } from 'quill-image-resize-module-ts';
import {Blog} from "../../interfaces/Blog";
import {Link, Navigate} from "react-router-dom";
import {BlogContext} from "../../contexts/BlogContext";
import {Strings} from "../../config/strings";

interface QuillEditorProps {}

const QuillEditor= () => {
    const [posted,setPosted]=useState<boolean>(false)
    const [title,setTitle]=useState("");
    const [blog,setBlog]=useState<Blog>();
    const [errorMsg,setErrorMsg]=useState("");
    const [imageURL,setImageURL]=useState("");
    const [content,setContent]=useState<string>("");
    Quill.register('modules/imageResize', ImageResize);
    useEffect(()=>{
    },[])
    const modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', {'align':[]}, 'blockquote','code-block'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image','video'],
                ['clean']
            ],
        imageResize: {
            modules: [ 'Resize', 'DisplaySize', ]
        }

        }

        const formats = [
                'header',
                'bold', 'italic', 'underline', 'strike', 'align','blockquote','code-block',
                'list', 'bullet', 'indent',
                'link', 'image','video'
            ]

    let context=useContext(BlogContext)
    function contentCheck() {
        if (!content){
            return Strings.NO_CONTENT
        }
        else if(!title){
            return Strings.NO_TITLE
        }
    }
    function update() {
            if(contentCheck()){
                alert(contentCheck())
            }
            else {
                localStorage.removeItem("preview");
                setBlog({
                    content: content,
                    createdDate: new Date().toLocaleString(),
                    title: title,
                    imageURL:imageURL
                })
                context.create({
                    content: content,
                    createdDate: new Date().toLocaleString(),
                    title: title,
                    imageURL:imageURL
                })
                setTimeout(()=>{
                    window.open("/preview","_blank")
                },200)
            }
        }
        
        function close() {
            setTitle("")
            setContent("")
            setImageURL("")
        }

    function create() {
        if(contentCheck()){
            alert(contentCheck())
        }
        else {
            setPosted(true)
            if(!localStorage.getItem("content-blog-api")){
                localStorage.setItem("content-blog-api",JSON.stringify([{
                    content: content,
                    createdDate: new Date().toLocaleString(),
                    title: title,
                    imageURL:imageURL
                }]))
            }
            else {
                localStorage.setItem("content-blog-api",JSON.stringify([
                    {
                        content: content,
                        createdDate: new Date().toLocaleString(),
                        title: title,
                        imageURL:imageURL
                    },...JSON.parse(localStorage.getItem("content-blog-api")!)
                ]))
            }
        }
    }

    return(
            <div className={`${styles.QuillEditor} ml-auto mr-auto w-[900px]  flex flex-col justify-center items-center`}>
                <div className={"flex flex-col mb-2 space-y-2"}>
                    <input
                        type={"text"}
                        className={"w-[900px] bg-transparent outline-0 font-semibold text-gray-600 text-2xl"}
                        placeholder={'Blog Title'}
                        onChange={(value)=>{setTitle(value.target.value)}}
                    style={{outline:'none',border:'none'}}/>
                    <input
                        type={"text"}
                        className={"w-[900px] bg-transparent outline-0 font-semibold text-gray-600 text-xs"}
                        placeholder={'Click here to Enter image url for blog banner'}
                        onChange={(value)=>{setImageURL(value.target.value)}}
                        style={{outline:'none',border:'none'}}/>
                </div>
                <ReactQuill
                    onChange={(value, delta, source, editor)=>{console.log(value);setContent(value)}}
                    style={{}}
                    id={"#testing"}
                    theme={"snow"}
                    formats={formats}
                    modules={modules}/>
                <div className={"flex mt-2 justify-between items-center w-full space-x-2"}>
                    <div>
                    {posted && <p className={"text-gray-600 font-semibold ml-2"}>Your blog is live</p>}
                    </div>
                    <div className={"flex space-x-2"} >
                        <Link to={"/home"}>
                        <div onClick={close}>
                    <Button type={"outline"}>cancel</Button>
                        </div>
                        </Link>
                    <div onClick={update}>
                    <Button type={"outline"}>preview</Button>
                    </div>
                    <div onClick={create} className={"disabled"}>
                    <Button type={"primary"}>post</Button>
                    </div>
                    </div>
                </div>
            </div>
        )
};

export default QuillEditor;
