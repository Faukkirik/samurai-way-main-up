import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likeCount:15},
        {id: 2, message: "It's my first post", likeCount:20},
    ]
    let postsElements = posts.map(el=>{
        return (
            <Post
                message={el.message}
                likeCount={el.likeCount}
            />
        )
    })
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

