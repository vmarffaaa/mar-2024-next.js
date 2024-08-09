import React, {FC} from 'react';
import CommentComponent from "@/components/comment/CommentComponent";

interface IProps {
    comments: any[]
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map((comment) => (<CommentComponent key={comment.id} comment={comment}/>))}
        </div>
    );
};

export default CommentsComponent;