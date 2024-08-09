import React from 'react';
import {getCommentsOfPost} from "@/services/api.service";
import CommentsComponent from "@/components/comments/CommentsComponent"

interface Params {
    searchParams: {
        id: string;
    }
}

const CommentsPage = async ({searchParams}: Params) => {
    console.log(searchParams);
    let comments = await getCommentsOfPost(+searchParams.id);
    console.log(comments);
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;