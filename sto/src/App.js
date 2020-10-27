import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header.js';
import HeaderDiag from './component2/HeaderDiag.js';
import ScrollToTop from './component2/ScrollToTop.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <ScrollToTop />
        <Switch>
          <Route path="/header-diag">
          <HeaderDiag />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
