import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './Home';
import Contact from './contact';

function App(){
    return(
        <Router>       
         <div>
            <Switch>
                <Route exact path="/">
                <Homepage />
                </Route>
                <Route path="/contact" >
                <Contact />
                </Route>
            </Switch>
        </div>
        </Router>

    );
}

export default App;