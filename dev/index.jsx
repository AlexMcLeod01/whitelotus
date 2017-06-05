import React from "react";
import {render} from "react-dom";
import DocumentTitle from "react-document-title";
import { BrowserRouter as Router,
        Route,
        Link,
        IndexRoute,
        Switch,
        browserHistory } from 'react-router-dom';

class App extends React.Component {
    render () {
        const style = {
            fontFamily: 'Constantia'
        };
        
        return (
            <div style={style}>Hi! Lot's of text to See.
            </div>
        );
    }
}

render(
    <Router onUpdate={()=>window.scrollTo(0,0)} history={browserHistory}>
        <App />
    </Router>,
    document.getElementById('app')
);