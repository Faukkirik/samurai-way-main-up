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
    let dialogsData = [
        {id: 1, name: "Den"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Alex"},
        {id: 4, name: "John"},
        {id: 5, name: "Habib"},
    ]
    let messageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi hi"},
        {id: 3, message: "bye bye"},
        {id: 4, message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={3} name={"Alex"}/>
                <DialogItem id={4} name={"John"}/>
                <DialogItem id={5} name={"Habib"}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={"bye bye"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    );
};
