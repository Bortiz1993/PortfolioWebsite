import React, {Component} from 'react';
import { Button, Tabs, Tab, Grid, Cell, Card, CardMenu, CardTitle, CardActions, IconButton, CardText} from 'react-mdl';




///activeTab is the tab Id. Original state of activeTab
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    //Method
    toggleCategories() {
    //if the active tab is set to 0, it is our React Category
    if(this.state.activeTab === 0){
        return(
            <div className='projects-grid'>
             {/*Project React 1 Card Styling, cannot figure out why there is a duplicate*/}
             <Card shadow={5} style={{Width: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}></CardTitle>
            <CardText>
             This is my React Project #1.
            </CardText>
            {/* CardActions is the className=mdl-card__actions */}
            <CardActions border>
            <Button colored>Github</Button>
            {/* Anchor tags work well for sending you to another page */}
            <Button  colored><a style={{textDecoration:'none'}} rel="noopener noreferrer" href='http://localhost:3001/AIGame' target='_blank'>Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}></CardTitle>
            <CardText>
             This is my React Project #2.
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            </div>
           
        )
    }   else if(this.state.activeTab === 1) {
        return (
            <div className='projects-grid'>
            {/**/}
            <Card shadow={5} style={{Width: '450', margin: '60px'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/javascript-2.svg) center / cover'}}></CardTitle>
           <CardText>
            This is my JavaScript Project #1.
           </CardText>
           {/* CardActions is the className=mdl-card__actions */}
           <CardActions border>
           <Button colored>Github</Button>
           <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share'/>
           </CardMenu>
           </Card>

           <Card shadow={5} style={{minWidth: '450', margin: '60px'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/javascript-2.svg) center / cover'}}></CardTitle>
           <CardText>
            This is my JavaScript Project #2.
           </CardText>
           <CardActions border>
           <Button colored>Github</Button>
           <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share'/>
           </CardMenu>
           </Card>


            </div>
        )
    }   else if(this.state.activeTab === 2) {
        return(
            <div className='projects-grid'>
            {/*Project React 1 Card Styling, cannot figure out why there is a duplicate*/}
            <Card shadow={5} style={{Width: '450', margin: '60px'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/html-1.svg) center / cover'}}></CardTitle>
           <CardText>
            This is my HTML/CSS Project #1.
           </CardText>
           {/* CardActions is the className=mdl-card__actions */}
           <CardActions border>
           <Button colored>Github</Button>
           <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share'/>
           </CardMenu>
           </Card>

           <Card shadow={5} style={{minWidth: '450', margin: '60px'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/html-1.svg) center / cover'}}></CardTitle>
           <CardText>
            This is my HTML/CSS Project #2.
           </CardText>
           <CardActions border>
           <Button colored>Github</Button>
           <Button colored>Live Demo</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
               <IconButton name='share'/>
           </CardMenu>
           </Card>

           </div>
        )
    }
        else if(this.state.activeTab === 3) {
            return(
                <div className='projects-grid'>
             {/*Project React 1 Card Styling, cannot figure out why there is a duplicate*/}
             <Card shadow={5} style={{Width: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.qQwwv7aYYcjY1q42pOzPFwHaEL?pid=ImgDet&w=203&h=152.8470588235294&c=7&dpr=1.25) center / cover'}}></CardTitle>
            <CardText>
             This is my MongoDB Project #1.
            </CardText>
            {/* CardActions is the className=mdl-card__actions */}
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '180px', background: 'url(https://th.bing.com/th/id/OIP.qQwwv7aYYcjY1q42pOzPFwHaEL?pid=ImgDet&w=203&h=152.8470588235294&c=7&dpr=1.25) center / cover'}}></CardTitle>
            <CardText>
             This is my MongoDB Project #2.
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            </div>
            )
        }
        else if(this.state.activeTab === 4) {
            return(
                <div className='projects-grid'>
             {/*Project React 1 Card Styling, cannot figure out why there is a duplicate*/}
             <Card shadow={5} style={{Width: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.7374zdY1ut1UmRsoT-bpLAHaEK?pid=ImgDet&w=203&h=114.1875&c=7&dpr=1.25) center / cover'}}></CardTitle>
            <CardText>
             This is my MySQL Project #1.
            </CardText>
            {/* CardActions is the className=mdl-card__actions */}
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: '60px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://th.bing.com/th/id/OIP.7374zdY1ut1UmRsoT-bpLAHaEK?pid=ImgDet&w=203&h=114.1875&c=7&dpr=1.25) center / cover'}}></CardTitle>
            <CardText>
             This is my MySQL Project #2.
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>

            </div>
            )
        }
    }

  
    render(){
        return(
            //Project tabs/ Skill. the state of activeTab is passed as a prop, the tab will change once the ID is clicked, it will then set the state here
            <div className='category-tabs'>
                {/* this Tab is the className= mdl-grid */}
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>MySQL</Tab>
                </Tabs>

            
                <Grid>
                    <Cell col={12}/>
                    <div className='content'>{this.toggleCategories()}</div>
                </Grid>
                    {/* {this.toggleCategories()} */}
    
            </div>
        );
    }
}

export default Projects;