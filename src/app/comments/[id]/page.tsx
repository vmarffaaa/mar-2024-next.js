import React, {FC} from 'react';


interface IProps {
    searchParams?: {
        data?: string,
    };
}

const CommentPage: FC<IProps> = ({searchParams}) => {
    let comment;
    if (searchParams && searchParams.data) {
        comment = JSON.parse(searchParams.data);
        console.log(comment, '!!!!');
    }
    return (
        <div>
            <h3>{comment.id}. {comment.name}</h3>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>

        </div>
    );
};

export default CommentPage;