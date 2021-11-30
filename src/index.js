import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UseStateHook from './comps/useState';
import UseRef from './comps/useRef';
import UseEffectHook from './comps/useEffect';
import UseLayoutEffect from './comps/useLayoutEffect';
import UseReducerHoook from './comps/useReducer';

ReactDOM.render(
  <React.StrictMode>

    <Router>
        <Switch>
          <Route exact path="/"><App/></Route>
          <Route exact path="/usestate"><UseStateHook/></Route>
          <Route exact path="/useeffect"><UseEffectHook/></Route>
          <Route exact path="/useref"><UseRef/></Route>
          <Route exact path="/uselayouteffect"><UseLayoutEffect/></Route>
          <Route exact path="/usereducer"><UseReducerHoook/></Route>
          <Route path="*"> <div class="container"><h1>404 Page Not Found</h1><h1><button><Link to="/">Go Home</Link></button></h1></div></Route>
        </Switch>
    </Router>

    
  </React.StrictMode>,
  document.getElementById('root')
);
