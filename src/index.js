import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Transfer from './Transfer';
import History from './History';
import Account from './Account';
import './bootstrap.min.css';


class App extends React.Component{
    render(){
        // console.log(location.pathname);
        return(
            <Router>
                {/* {location.pathname === '/login' || <Header/>} */}
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
