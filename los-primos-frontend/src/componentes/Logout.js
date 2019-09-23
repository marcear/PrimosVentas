export const cerrarSesion = (props)=>{
    localStorage.removeItem("usuario");
    props.history.push('/login');
}