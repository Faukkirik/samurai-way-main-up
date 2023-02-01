import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
type DialogItemType ={
    id:number
    name:string
}
type MessageType ={
    message:string
}
const DialogItem = (props:DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message =(props:MessageType)=>{
    return (<div className={s.message}>{props.message}</div>)
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Den"}/>
                <DialogItem id={2} name={"Bob"}/>
                <DialogItem id={3} name={"Alex"}/>
                <DialogItem id={4} name={"John"}/>
                <DialogItem id={5} name={"Habib"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Hi hi"}/>
                <Message message={"bye bye"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    );
};
