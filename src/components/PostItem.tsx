import React, {FC} from "react";
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    
    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        update({...post, title: title});
    }
    
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post);
    }
    
    return (
        <div className='post' onClick={handleUpdate}>
            {post.id} {post.title}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PostItem;