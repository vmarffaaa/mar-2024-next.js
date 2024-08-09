import React from 'react';
import Link from "next/link";
import {getAllComments} from "@/services/api.service"
import style from "@/components/comment/Comments.module.css"


const CommentsPage = async () => {

    let allComments = await getAllComments();

    return (
        <div>
            <ul className={style.box}>
                {
                    allComments.map(value => <li key={value.id}>
                        <Link href = {{
                            pathname:'/comments/'+ value.id,
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

export default CommentsPage;