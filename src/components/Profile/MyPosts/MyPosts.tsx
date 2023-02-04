import React from 'react';
import s from './MyPosts.module.css'
import {Post, TypePropsPost} from "./Post/Post";

export type MyPostsType = {
    posts: TypePropsPost[]
}
export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(el=>{
        return (
            <Post
                key={el.id}
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

