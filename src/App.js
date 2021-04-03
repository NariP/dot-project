import React from 'react';
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom';
import './App.css';
import MainPage from "./components/MainPage";
import WebcamComponent from "./components/WebcamComponent";

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/camera' component={WebcamComponent} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
