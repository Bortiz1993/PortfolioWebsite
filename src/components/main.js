import React from 'react';
import LandingPage from './landingpage';
import { Route, Switch } from 'react-router-dom';
// import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
 import NoMatch from './NoMatch';



//The main routes of the website, EX: localhost 3000/aboutme or localhost 3000/resume. Created all of the pages first, then create all of the routes here.
const Main = () => {
    return(
     <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/aboutme" component={AboutMe}/> */}
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="*" component={NoMatch}/>
     </Switch> 
    )
}

export default Main;