import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'metadata'
}
type Props = { children: React.ReactNode }
const PostLayout = ({children}: Props) => {
    return (
        <div>

            <hr/>
            {children}
        </div>
    );
};

export default PostLayout;