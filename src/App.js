import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Screen1 from './screen1/Screen1'
import Screen2 from './screen2/Screen2'
import Form from './forms/Form'
import SkuForm from './skuForm/SkuForm'
import MultipleSelectCheckmarks from "./skuForm/MultipleSelectCheckmarks";
import Editlist from './skuForm/Editlist';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Screen1} exact />
        <Route path="/Screen2" component={Screen2} />
        <Route path="/Form" component={Form} />
        <Route path="/SkuForm" component={SkuForm} />
        <Route path="/SkuForm2" component={MultipleSelectCheckmarks} />
        <Route path="/Editlist" component={Editlist}/>
      </div>
    </Router>
  );
}

export default App;