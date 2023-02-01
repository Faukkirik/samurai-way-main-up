import React from 'react';
import s from './PropfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.lina} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/605e1b31691245.565cd01085b21.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

