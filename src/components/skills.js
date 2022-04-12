import React from 'react';
// import {withStyles} from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles"; 
// withStyles will allow me to custom style the component.
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';


// You dont need props in a function component
//Hooks are to be used with function components, not Class components. If i use a Class component, I need to import COMPONENT from React.
function Skills (){
    // StyledRating is if you want to create a custom component
    // const StyledRating = withStyles({
    //     font: {
    //       color: '#ff6d75',

    //     },
    //     iconHover: {
    //       color: '#ff3d47',
    //     },
    //   });

    //useStyles can be used to Style a component.
    const useStyles = makeStyles({
        root: {
          borderRadius: 12,
          fontSize: "25px"
        }
      });
    //   Place the const inside the return with  a component for it to work
      const classes = useStyles();
      
    return(
        <div>
            
                <Box component="fieldset"  borderColor="transparent">
                <Typography className={classes.root}  variant='h1' component="legend">React</Typography>
                <Rating name="React-Rating" defaultValue={3} max={10} readOnly />
                 </Box>

                <Box component="fieldset"  borderColor="transparent">
                <Typography  className={classes.root}component="legend" variant='h5' >HTML/CSS</Typography>
                <Rating name="HTML/CSS-Rating" defaultValue={4} max={10} readOnly />
                 </Box>

                 <Box component="fieldset"  borderColor="transparent">
                <Typography  className={classes.root}component="legend" variant='h5' >JavaScript</Typography>
                <Rating name="JavaScript-Rating" defaultValue={3} max={10} readOnly />
                 </Box>

                 <Box component="fieldset"  borderColor="transparent">
                <Typography  className={classes.root}component="legend" variant='h5' >NodeJS</Typography>
                <Rating name="NodeJS-Rating" defaultValue={3} max={10} readOnly />
                 </Box>

                 <Box component="fieldset"  borderColor="transparent">
                <Typography  className={classes.root}component="legend" variant='h5' >MySQL</Typography>
                <Rating name="MySQL-Rating" defaultValue={2} max={10}  readOnly/>
                 </Box>

                 <Box component="fieldset"  borderColor="transparent">
                <Typography  className={classes.root}component="legend" variant='h5' >NoSQL</Typography>
                <Rating name="NoSQL-Rating" defaultValue={3} max={10} readOnly />
                 </Box>
        </div>
    );

}

export default Skills;