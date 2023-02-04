import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

export type DialogsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map(el => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        )
    })
    let messagesElements = props.messages.map(el => {
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
