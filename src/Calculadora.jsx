import {useState,useRef, useEffect} from 'react';
import Boton from './Boton';


function Calculadora(){
    const [valor, setValor] = useState('');
    const display = useRef(null);
    const valorAnterior = useRef('');
    const operacion = useRef('');
    useEffect(()=>{
        display.current.textContent = valor;
    },[valor]);

    function handleAddNumber(n){
        if(valor.length<10){
            setValor(()=>valor+n);
        }
    }
    function handleOperation(o){
        valorAnterior.current = valor;
        setValor('');
        operacion.current = o;

    }
    function handleEqual(){
        if(operacion.current != null){
            if(operacion.current === '+'){
                const res = Number(valorAnterior.current) + Number(valor);
                setValor(res);
            } else if(operacion.current === '-'){
                const res = Number(valorAnterior.current) - Number(valor);
                setValor(res);
            } else if(operacion.current === 'x'){
                const res = Number(valorAnterior.current) * Number(valor);
                setValor(res);
            } else if(operacion.current === '/'){
                const res = Number(valorAnterior.current) / Number(valor);
                setValor(res);
            }
            valorAnterior.current=0;
            operacion.current = null;
        }
    }
    function handleClear(){
        setValor('');
    }

    return(
        <div className="w-[300px] h-[350px] bg-slate-900 flex flex-col items-center justify-center m-10 rounded-xl">
            <div id="display" className="w-[90%] h-[10%] bg-slate-200 m-4 rounded-md">
                <p id="" ref={display} className="text-slate-400 text-2xl px-2 text-right">hola</p>
            </div> 
            <div id="keyboard" className="w-[90%] h-[80%] flex flex-row-reverse bg-slate-900 mx-2 my-4 border rounded-2xl">
                <div className='flex flex-col p-2'>
                    <Boton callback={handleClear}>C</Boton>
                    <Boton callback={()=>handleOperation('+')}>+</Boton>
                    <Boton callback={()=>handleOperation('x')}>x</Boton>
                    <Boton callback={()=>handleOperation('/')}>/</Boton>
                    <Boton callback={handleEqual}>=</Boton>
                </div>
                <div className='flex flex-wrap p-3'>
                    <Boton callback={()=>handleAddNumber(9)}>9</Boton>
                    <Boton callback={()=>handleAddNumber(8)}>8</Boton>
                    <Boton callback={()=>handleAddNumber(7)}>7</Boton>
                    <Boton callback={()=>handleAddNumber(6)}>6</Boton>
                    <Boton callback={()=>handleAddNumber(5)}>5</Boton>
                    <Boton callback={()=>handleAddNumber(4)}>4</Boton>
                    <Boton callback={()=>handleAddNumber(3)}>3</Boton>
                    <Boton callback={()=>handleAddNumber(2)}>2</Boton>
                    <Boton callback={()=>handleAddNumber(1)}>1</Boton>
                    <Boton callback={()=>handleAddNumber(0)}>0</Boton>
                </div>
            </div>
        </div>
    );
}
export default Calculadora;