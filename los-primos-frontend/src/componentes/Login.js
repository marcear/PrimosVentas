import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';


import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow:1
    }
}));

function Login(props) {
    const classes = useStyles();
    debugger;
    const [redireccionaALogin,setRedireccionaALogin] = useState(true);
    const from = props.location.pathname;
    
        return (
            <FormControl className={classes.root}>
                <InputLabel htmlFor="my-input">Usuario</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
    );
}

export default Login