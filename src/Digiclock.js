import {useState } from "react";
import { useNavigate } from "react-router-dom";
import Worldclock from "./Worldclock";
export default function Digiclock()
{
    const[info,setInfo]=useState("");
    const nav=useNavigate();
    
        const time=(event)=>{
        const d= new Date().toLocaleTimeString();
        
       
        setInfo(d)
        }
        setInterval(time,1000)

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
    
    return(
        <>
        <center>
            <div className="btns">
            <button onClick={Stopwatch}>Stopwatch</button>
            <button onClick={wc}>WorldClock</button>
            <button onClick={CT}>Countdown Timer</button>
            <button onClick={Alrm}>Alarm</button>
            </div>
            
       
            <div className="digiclock" >

            <h1 className="time">{info}</h1>
            </div>

        </center>
        </>
    );
}