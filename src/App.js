import React from 'react';
import Menu from './Component/Menu/Menu';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import route from './route'


function App() {
    return (
        <Router>
            {/* menu */}

            <Menu/>
            {/* content */}
           {/* <ProductList/> */}
            <Switch>
                { route.map((item , key) => {
                   return <Route path = {item.path} exact = {item.exact} component = {item.component} key ={key}/>
                })}
            </Switch>


        </Router>
    );
}

export default App;
