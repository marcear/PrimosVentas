import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme =>({
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      drawerPaper: {
        width: 240,
      }
  }));


  
function ComponenteBarraLateral(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [opcionElegida,setOpcionElegida] = useState(0);

    const renderLink = React.useMemo(
      (to) =>
        React.forwardRef((itemProps, ref) => (
          <Link to={to} {...itemProps} innerRef={ref} />
        )),
      [],
    );

    const OpcionesBarraLateral = () => (
        <div>
            <List>

                {props.opciones.map((item, index) => (
                  <ListItem 
                    button 
                    key={index}
                    component= {renderLink} to={item.path}
                    selected= {opcionElegida == index}
                    onClick={() => setOpcionElegida(index)}
                    >
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
            </List>
        </div>
    );

    
    return(
        <div>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={props.cerrarDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
            <OpcionesBarraLateral />

            </Drawer>
        </div>
    );
}

export default ComponenteBarraLateral;