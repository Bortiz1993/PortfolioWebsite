import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import BitMojiMe from './../images/BitMojiMe.png';

// The cell always requires a column attribute
class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                {/* Left side of Grid */}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={BitMojiMe}
                            alt='BitMojiMe'
                            style={{height: '200px'}}
                            />
                        </div> 
                        <h2 style={{paddingTop: '2em'}}>Brijido Ortiz</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>hello this is my resume</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>somewhere in Illinois</p>
                        <h5>phone</h5>
                        <p>309-299-2589</p>
                        <h5>Email</h5>
                        <p>Bortiz4ever@Gmail.com</p>
                        <h5>Web?</h5>
                        <p>some Website</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>

                    {/* Right side of Grid */}
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
    );
 }
}

export default Resume;