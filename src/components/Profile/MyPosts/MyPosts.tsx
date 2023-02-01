import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let myPostData = [
        {id: 1, message: "Hi, how are you?", likeCount:15},
        {id: 2, message: "It's my first post", likeCount:20},
    ]
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
                <Post
                    message={myPostData[0].message}
                    likeCount={myPostData[0].likeCount}
                />
                <Post
                    message={myPostData[1].message}
                    likeCount={myPostData[1].likeCount}
                />

            </div>
        </div>
    );
};

