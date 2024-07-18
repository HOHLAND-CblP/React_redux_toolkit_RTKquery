import React, {FC, useEffect, useState} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer:FC = () => {
    const [limit, setLimit] = useState<number>(100);
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [deletePost, {}] = postApi.useDeletePostMutation();
    useEffect(()=>{
        /*setTimeout(()=> {
            setLimit(3)
        }, 2000)*/
    }, [])
    
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost);
    }
    
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    
    const handleDelete = (post: IPost) => {
        deletePost(post);
    }
    
    return (
        <div>
            <div className='posts__list'>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map((post) => (
                    <PostItem remove={handleDelete} update={handleUpdate} key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default PostContainer;