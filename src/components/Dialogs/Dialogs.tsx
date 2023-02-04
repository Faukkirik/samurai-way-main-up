import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type MessageType = {
    message: string
}

export const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Den"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Alex"},
        {id: 4, name: "John"},
        {id: 5, name: "Habib"},
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi hi"},
        {id: 3, message: "bye bye"},
        {id: 4, message: "Yo"},
    ]
    let dialogsElements = dialogs.map(el => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        )
    })
    let messagesElements = messages.map(el => {
        return (
            <Message message={el.message}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
