import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Transfer from './Transfer';
import History from './History';
import Header from './Header'


class App extends React.Component{
    render(){
        // console.log(location.pathname);
        return(
            <Router>
                {window.location.pathname === '/login' || <Header/>}
                <Route exact path="/" component={Home}/>
                <Route exact path="/transaction" component={Transfer}/>
                <Route exact path="/history" component={History}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'));
