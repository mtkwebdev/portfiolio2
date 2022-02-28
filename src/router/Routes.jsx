import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from '../pages/Index' 
import Introduction from '../pages/Introduction' 
import Projects from "../pages/Projects";
import Cv from '../pages/Cv'
// import WhyMe from '../pages/WhyMe'
// import Blog from '../pages/Blog'
// import Misc from '../pages/Misc'
import Contact from '../pages/Contact'
import Soon from "../pages/Soon";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Index} exact path="/"/>
        <Route component={Introduction} path="/introduction"/>
        <Route component={Projects} path="/projects"/>
        <Route component={Cv} path="/cv"/>
        {/* <Route component={WhyMe} path="/why"/>
        <Route component={Blog} path="/blog"/>
        <Route component={Misc} path="/misc"/> */}
        <Route component={Soon} path="/why"/>
        <Route component={Soon} path="/blog"/>
        <Route component={Soon} path="/misc"/>
        <Route component={Contact} path="/contact"/>
      </Switch>
    </Router>
  )
}

export default Routes