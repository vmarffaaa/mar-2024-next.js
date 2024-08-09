import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import Link from "next/link";
import style from "@/components/post/PostComponent.module.css"

const PostPage = ({searchParams}: any) => {
    let post = JSON.parse(searchParams.data)
    return (
        <div className={style.box}>
            <h2>{post.id}. {post.title}</h2>
            <h3>Post of user {post.userId}</h3>
            <p className={style.text}>{post.body}</p>
            <button>
                <Link className={style.link} href={{pathname: '/posts/' + post.id + '/comments', query: {id: post.id}}}>Show comments</Link>
            </button>
        </div>
    );
};

export default PostPage;