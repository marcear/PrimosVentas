import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';


function ComponenteMain(props) {
    const useStyles = makeStyles(theme => ({
        main:{
            marginTop: theme.spacing(10),
            marginRight:theme.spacing(10),
            justifyContent:'flex-end'
        },
        // content: {
        //     transition: theme.transitions.create('margin', {
        //       easing: theme.transitions.easing.sharp,
        //       duration: theme.transitions.duration.leavingScreen,
        //     }),
        //     marginLeft: -240,
        //   },
        //   contentShift: {
        //     transition: theme.transitions.create('margin', {
        //       easing: theme.transitions.easing.easeOut,
        //       duration: theme.transitions.duration.enteringScreen,
        //     }),
        //     marginLeft: 0,
        //   },
        }));

    const classes = useStyles();
    return(
        <Grid item xs={9} className={classes.main} >
            <div >
                {props.children}
            </div>
        </Grid>
    );
}

export default ComponenteMain;