import React, {FC} from 'react';
import Link from "next/link";
import style from "@/components/post/PostComponent.module.css"

interface IProps {
    post: any
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div className={style.box}>
            <Link className={style.link} href={{pathname: '/posts/' + post.id, query: {data: JSON.stringify(post)}}}>
                {post.id}. {post.title}
            </Link>
        </div>
    );
};

export default PostComponent;