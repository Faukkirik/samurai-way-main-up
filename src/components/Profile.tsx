import React from 'react';
import s from './Propfile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/605e1b31691245.565cd01085b21.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

