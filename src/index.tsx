import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, how are you?", likeCount:15},
    {id: 2, message: "It's my first post", likeCount:20},
]
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
ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);