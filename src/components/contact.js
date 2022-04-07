import React, {Component} from 'react';
import {Grid, Cell, ListItem, List, ListItemContent} from 'react-mdl';


//a grid system with React-mdl.
class Contact extends Component {
    render(){
        return(
            <div className='contact-body'>
                 <Grid className="contact-grid">
                 {/* 2 Cells with location of 6 column, the lower the number in the column, the smaller the Cell?. */}
                    <Cell col={6}><h1>Brijido Ortiz</h1>
                        <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> hello this is Brijido Ortiz</p>
                    </Cell>
                   
                    <Cell col={6}>
                        <h2>Contact me</h2>
                            <hr/>
                            <div className='contact-list'>
                            <List>
                                <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden="true"/>  309-299-2589
                              
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                         <i className='fa fa-snapchat' aria-hidden="true"/> bortiz4ever
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                 <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden='true'/>
                                Bortiz4ever@gmail.com
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