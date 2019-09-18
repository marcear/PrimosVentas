export const cerrarSesion = (props)=>{
    localStorage.setItem("usuario", null);
    props.history.push('/login');
}