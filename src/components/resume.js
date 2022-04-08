import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import BitMojiMe from './../images/BitMojiMe.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills'

// The cell always requires a column attribute/ this component is the parent to Education and experience.
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

                    {/* Right side of Grid, props was created for simplicity in this situation*/}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2009}
                        endYear= {2012}
                        schoolName= 'MRHS'
                        schoolDescription= 'MRHS is the high school I went too.'
                        />
                        <Education 
                        startYear={2021}
                        endYear= 'On going'
                        schoolName= 'Bryan University'
                        schoolDescription= 'Bryan University is where I went to study Web Dev'
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName='Dominos Pizza'
                            jobDescription= 'Delivery Driver'
                        />
                        <Experience
                            startYear={2018}
                            endYear='still employed.'
                            jobName='Americold'
                            jobDescription= 'Warehouse'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills
                            
                        />
                    </Cell>
                </Grid>
            </div>
    );
 }
}

export default Resume;