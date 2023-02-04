import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile, ProfileType} from "./components/Profile/Profile";
import {Dialogs, DialogsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";

type AppType = ProfileType & DialogsType
function App(props:AppType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/profile"} render={()=><Profile posts={props.posts}/>}/>
                    <Route path={"/dialogs"} render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={"/news"} render={()=><News/>}/>
                    <Route path={"/music"} render={()=><Music/>}/>
                    <Route path={"/settings"} render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
