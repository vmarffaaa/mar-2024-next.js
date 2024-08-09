import React from 'react';
import Link from "next/link";
import {getAllPosts} from "@/services/api.service"
import style from "@/components/post/PostComponent.module.css"


const PostsPage = async () => {

    let allPosts = await getAllPosts();

    return (
        <div>
            <ul className={style.box}>
                {
                    allPosts.map(value => <li className={style.li} key={value.id}>
                        <Link className={style.link} href = {{
                            pathname:'/posts/'+ value.id,
                            query:{data:JSON.stringify(value)}
                        } }>
                            {value.id}.{value.title}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default PostsPage;