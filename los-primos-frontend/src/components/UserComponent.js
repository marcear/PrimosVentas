import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useState, useEffect} from 'react';
import axios from 'axios';


// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

function UserComponent() {

    //const classes = useStyles();
    const[users, setData] = useState([]);
    useEffect(() => {
        debugger;
        axios.get('http://localhost:4000/usuarios')
        .then(res => {
            setData(res.data)
        })
        .catch(e => {
            console.log(e)
        });
      },[]);

    return(
        <List>
            {users.map((user,index) => (
            <ListItem key={index}>
            <ListItemText key = {user.id} primary = {user.nombre} secondary = {user.rol} />
        </ListItem>
        ))}
        </List>
    );
}

export default UserComponent;