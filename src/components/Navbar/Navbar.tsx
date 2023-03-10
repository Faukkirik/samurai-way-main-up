import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    to={"/profile"}
                    activeClassName={s.active}
                    className={s.item}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"/dialogs"}
                    activeClassName={s.active}
                    className={s.item}>
                    Message
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"/news"}
                    activeClassName={s.active}
                    className={s.item}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"/music"}
                    activeClassName={s.active}
                    className={s.item}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={"/settings"}
                    activeClassName={s.active}
                    className={s.item}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};

