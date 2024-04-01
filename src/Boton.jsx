

function Boton({callback, classList,children}){
    return(
        <button className={classList} onClick={callback}>{children}</button>
    );
}
export default Boton;

Boton.defaultProps ={
    classList: 'w-[48px] h-[48px] bg-slate-400 rounded-xl',
    children: '0'
}