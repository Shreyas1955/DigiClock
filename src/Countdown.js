import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Countdown = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const nav=useNavigate()
 
  
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
 
 
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    
  };
  
  
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
   
  };
  
  
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 120);
    
    return deadline;
  };
  
  
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
    
  };
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

  
  
  return (
    <>
    <center>
    <div className="btns">
            <button onClick={dc}>Digiclock</button>
            <button onClick={Stopwatch}>Stopwatch</button>
            <button onClick={wc}>WorldClock</button>
            <button onClick={Alrm}>Alarm</button>
            </div>
            <div className="countdown" >
              <h1>CountDown Timer</h1>
    
      <h2>{timer}</h2>
      
      <button onClick={onClickReset}>Reset</button>
      </div>
      </center>
    </>
  );
};
export default Countdown;
