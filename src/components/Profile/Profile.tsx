import React from 'react';
import s from './Propfile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.lina} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/605e1b31691245.565cd01085b21.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

