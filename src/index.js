import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Transfer from './Component/Transfer/Transfer';
import History from './Component/History/History';
import Account from './Component/Account/Account';
import Navigation from './Component/Navigation/Navigation'
import './bootstrap.min.css';


class App extends React.Component{
    render(){
        // console.log(location.pathname);
        return(
            <Router>
                {window.location.pathname === '/login' || window.location.pathname === '/' || <Navigation/>}
                <Route exact path='/' component={Home}/>
                <Route exact path='/transfer' component={Transfer}/>
                <Route exact path='/history' component={History}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/account' component={Account}/>
            </Router>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'));
