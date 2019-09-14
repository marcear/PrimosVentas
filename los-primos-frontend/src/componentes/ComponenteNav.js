import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({

    menuButton: {
      marginRight: theme.spacing(8),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
        display: 'none',
      },
    appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
  }));



function ComponenteNav(props) {
    const classes = useStyles();

    return(
        <div >
            <AppBar 
                position="fixed"  
                className={clsx(classes.appBar, {
                [classes.appBarShift]: props.barraLateralAbierta,
            })}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu" 
                    onClick={props.onBarClick}
                    className={clsx(classes.menuButton, props.barraLateralAbierta && classes.hide)}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Los Primos
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default ComponenteNav;