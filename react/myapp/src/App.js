import Home from "./components/HomeComponents/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutComponent from "./components/About/AboutComponent";
import Navbar from "./components/Navbar";

function App() {

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className='content'>
                        <Switch>
                            <Route exact path='/'>
                                <Navbar/>
                                <Home/>
                            </Route>
                            <Route exact path="/about">
                                <Navbar/>
                                <AboutComponent/>
                            </Route>
                        </Switch>
                    </div>
                </header>
            </div>
        </Router>

    );
}

export default App;
