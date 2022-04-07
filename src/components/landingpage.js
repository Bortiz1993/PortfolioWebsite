import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
// import './App.css';
import BitMojiMe from './../images/BitMojiMe.png';
import '../App.css';

class Landing extends Component {
    render (){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid id="landing-grid">
            <Cell col={12}>
                <img
                   src={BitMojiMe}
                    alt='BitMojiMe'
                    className='BitMojiMe-img'

                />
                <div className='banner-text'>
                <h1>Full Stack Web Developer</h1>
                <hr/>

                <p>HTML/CSS | JavaScript | React | MongoDB | MySql | NodeJS | Express </p>
                <div className='social-links'>
                {/* GitHub */}
                    <a href='https://github.com/Bortiz1993?tab=repositories' rel='noopener noreferrer' target="_blank">
                        <i className='fa fa-github'  aria-hidden="true"></i>
                    </a>
                {/* LinkedIn */}
                <a href='https://www.linkedin.com/in/brijido-zuniga-849981211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGMUNTcpISh%2BNx5ARdAjM6A%3D%3D' rel='noopener noreferrer' target="_blank">
                    <i className='fa fa-linkedin' aria-hidden="true"></i>

                </a>
                {/* Zenva Academy */}
                <a href='https://academy.zenva.com/my-courses/' rel='noopener noreferrer' target="_blank">
                    <i className='fa fa-gamepad' aria-hidden="true"></i>

                </a>

                </div>
                </div>

            </Cell>
            </Grid>
            </div>
        );
    }
}

export default Landing;