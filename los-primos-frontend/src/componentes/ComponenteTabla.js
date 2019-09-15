import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      overflowX: 'auto',
      overflowY:'scroll',
      height: 650
    },
    table: {
      minWidth: 400,
    },
  }));

const GeneraFila = (props) =>{
return props.nombreColumnas.map((key,index)=>{
    return <TableCell key={index}>{props.fila[key]}</TableCell>
})
}

function ponerPrimerLetraMayuscula(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

function ComponenteTabla(props) {
    const classes = useStyles();

    let nombreColumnas = props.cols.map((col)=>{return col.nombre});
    return(
    props.filas.length > 0 && 
    <div className={classes.root}>
      <Table>
          <TableHead>
              <TableRow>
                  {props.cols.map((col)=>(
                      <TableCell key={col.id}>{ponerPrimerLetraMayuscula(col.nombre)}</TableCell>
                  ))}
              </TableRow>
          </TableHead>
          <TableBody>
            {props.filas.map((fila,index) => (
              <TableRow key={index}>
                  <GeneraFila key={index} nombreColumnas ={nombreColumnas} fila={fila}/>
              </TableRow>
            ))}
          </TableBody>
      </Table>
      </div>
    );
}

export default ComponenteTabla;