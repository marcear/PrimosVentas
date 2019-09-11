import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ComponenteBarraLateral from './ComponenteBarraLateral';
import clsx from 'clsx';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
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
    const [barraLateralOpen, setBarraLateralOpen] = useState(false);

    function abrirDrawer() {
        setBarraLateralOpen(true);
    }  

    function cerrarDrawer() {
        setBarraLateralOpen(false)
    }

    return(
        <div className={classes.root}>
            <AppBar position="fixed"  className={clsx(classes.appBar, {
                [classes.appBarShift]: barraLateralOpen,
            })}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={abrirDrawer}>
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Los Primos
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
            <ComponenteBarraLateral open={barraLateralOpen} cerrarDrawer={cerrarDrawer} opciones={["Home","Usuarios","Ventas","Otro"]}/>
        </div>
    );
}

export default ComponenteNav;