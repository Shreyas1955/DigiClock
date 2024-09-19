import {useEffect,useState} from "react"
import { useNavigate } from 'react-router-dom';
export default function Stopwatch()

{
    const nav=useNavigate()
const [time,setTime]=useState(0)
const [timeron,setTimeron]=useState(false)

useEffect(()=>{
    let interval=null;
    if(timeron){
        interval=setInterval(()=>{
            setTime(prevTime=>prevTime+10)
        },10)
    }
    else
    {
        clearInterval(interval)
    }
    return()=>clearInterval(interval)

},[timeron])
const Stopwatch=(event)=>{
    nav("/Stopwatch")
}
const Alrm=(event)=>{
    nav("/Alarm")
}
const CT=(event)=>{
    nav("/Countdown")
}
const wc=(event)=>{
    nav("/Worldclock")
}
const dc=(event)=>{
    nav("/")
}

    return(
        <>
        <center>
        <div className="btns">
        <button onClick={dc}>Digiclock</button>
            <button onClick={wc}>WorldClock</button>
            <button onClick={CT}>Countdown Timer</button>
            <button onClick={Alrm}>Alarm</button>
            </div>
            <h1>Stopwatch </h1><br/><br/>
            <div className="stopwatch">
                
            {(!timeron) && time==0 &&(<button onClick={()=>setTimeron(true)}>Start</button>)

            }
             {(timeron) && ( <button onClick={()=>setTimeron(false)}>Stop</button>)

             }
            {(!timeron) && time!==0 && (<button onClick={()=>setTimeron(true)}>Resume</button>)

            }
          
            {(!timeron) && ( <button onClick={()=>setTime(0)}>reset</button>)

            }
            
            
            
            
            
            
            <div className="span">

                <span>{("0" + Math.floor((time/60000)%100)).slice(-2)}:</span>  
                <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span> 
                <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>  
            </div>
            </div>
        </center>
        </>
    );
}