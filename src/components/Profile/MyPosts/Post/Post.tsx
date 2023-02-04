import React from 'react';
import s from './Post.module.css'


export type TypePropsPost = {
    id?: number
    message: string
    likeCount: number
}
export const Post: React.FC<TypePropsPost> = (props) => {
    const {message,likeCount, ...otherProps} = props
    return (
        <div className={s.item}>
            <img className={s.morph}
                 src="https://avatars.mds.yandex.net/i?id=9c442610942646be39e9ae0e529297cb3d7d1b54-7575569-images-thumbs&n=13"
                 alt=""/>
            {message}
            <div>
                <span>Like {likeCount}</span>
            </div>

        </div>
    );
};

