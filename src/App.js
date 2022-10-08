import React, {Component} from 'react';
import { Navigation, Layout, Header, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';

//to Deploy this site, it has to be deployed manually by first doing npm run build, dropping the file in netlify manually and start a deployment. make sure to push changes first.


//These are the Nav bars. The routes are linked up to the links.
class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
      <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
      <Navigation>
        <Link to="/resume">Resume</Link>
        {/* <Link to="/aboutme">About me</Link> */}
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
      </Header>
      <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
        <Navigation>
        <Link to="/resume">Resume</Link>
        {/* <Link to="/aboutme">About me</Link> */}
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content"/>
      <Main/>
      </Content>
    </Layout>
    </div>
  );
}
}

export default App;
