import React, {Component} from 'react';
import {Grid, Cell, ListItem, List, ListItemContent} from 'react-mdl';
import BitMojiHi from './../images/BitMojiHi.png';


//a grid system with React-mdl.
class Contact extends Component {
    render(){
        return(
            <div className='contact-body' style={{overflow:'auto'}}>
                 <Grid className="contact-grid">
                 {/* 2 Cells with location of 6 column, the lower the number in the column, the smaller the Cell?. */}
                    <Cell col={4}><h1>Brijido Ortiz</h1>
                        <img src={BitMojiHi}
                            alt="BitMojiHi"
                            style={{height: '250px'}}
                        />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> hello this is Brijido Ortiz</p>
                    </Cell>
                   
                    <Cell col={8}>
                        <h2>Contact me</h2>
                            <hr/>
                            <div className='contact-list'>
                            <List style={{}}>
                                <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                              <span className='phoneSpan' style={{display: 'flex', justifyContent: 'flex-start', flewWrap:'wrap', alignItems: 'flex-end'}}>  
                              <i className='fa fa-phone-square' aria-hidden="true"/>  309-299-2589</span>
                              
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                            <span className='snapchatSpan' style={{display: 'flex', justifyContent: 'flex-start', flexWrap:'wrap', alignItems:'flex-end'}}><i className='fa fa-snapchat' aria-hidden="true"/> bortiz4ever</span>
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                            {/* stylings here need work TODO  */}
                                 <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                 <span className='emailSpan' style={{display: 'flex', justifyContent:'flex-start', flexWrap: 'wrap', alignItems:'flex-end', flexDirection: 'row'}}><i className='fa fa-envelope' aria-hidden='true'/>
                                Bortiz4ever@gmail.com</span>
                
                                </ListItemContent>    
                                </ListItem>
                            </List>
                            </div>
                   
                    </Cell>
                </Grid>
            </div>
           
        );
    }
}

export default Contact;