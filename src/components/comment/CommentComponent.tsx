import React, {FC} from 'react';
import style from "./CommentComponent.module.css"

const CommentComponent :FC<any>= ({comment}) => {
    return (
        <div className={style.box}>
            <h2> {comment.id}: {comment.name} </h2>
            <p><b>Post Id:</b> {comment.id}</p>
            <p><b>Email of {comment.name}:</b> {comment.email}</p>k
            <p><b>Comment:</b> {comment.body}</p>
        </div>
    );
};

export default CommentComponent;