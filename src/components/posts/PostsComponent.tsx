import React, {FC} from 'react';
import PostComponent from "@/components/post/PostComponent";

interface IProps {
    posts: any[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsComponent;