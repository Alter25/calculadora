import {useState, useEffect} from 'react';

function Clock(){
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
            const key = setInterval(()=>{
                setCounter(c=>c+1);
            },1000);
            return ()=>{
                clearInterval(key);
            }
        },[])
    return(
        <div className='w-[200px] h-16 bg-slate-950 flex items-center justify-center
        rounded-2xl border border-pink-400'>
            <p className='text-white p-8'>Tiempo: {counter}</p>
        </div>
    );
}

export default Clock;