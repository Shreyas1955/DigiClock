import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Alarm() {
  const [info, setInfo] = useState(""); // Holds the current time
  const [alarm, setAlarm] = useState(false); // Tracks if an alarm is set
  const [hours, setHours] = useState(""); // Stores the input for hours
  const [minutes, setMinutes] = useState(""); // Stores the input for minutes
  const [alarmsArray, setAlarmsArray] = useState([]); // Stores all set alarms
  const nav = useNavigate(); // For navigation

  const hHours = (event) => setHours(event.target.value);
  const hMinutes = (event) => setMinutes(event.target.value);

  // Updates the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setInfo(currentTime); // Set current time
      checkAlarms(); // Check if any alarms match the current time
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [alarmsArray]); // Dependency on alarmsArray to re-check when new alarms are added

  // Function to check if the current time matches any of the set alarms
  const checkAlarms = () => {
    const hr = new Date().getHours();
    const min = new Date().getMinutes();

    alarmsArray.forEach((alarm) => {
      let alarmHour = +alarm.hours;
      let alarmMinute = +alarm.minutes;

      if (alarmHour === hr && alarmMinute === min) {
        alert("Hey, it's time!");
        clearInterval(); // Stop checking after alarm triggers
        setAlarm(false);
      }
    });
  };

  // Function to handle saving the alarm (add to local state)
  const save = (event) => {
    event.preventDefault();
    if (!hours || !minutes) {
      alert("Please set a valid alarm time.");
      return;
    }

    let newAlarm = { hours, minutes }; // Create an alarm object
    setAlarmsArray([...alarmsArray, newAlarm]); // Add it to the alarms array
    setAlarm(true);
  };

  // Navigation buttons
  const Stopwatch = () => nav("/Stopwatch");
  const Alrm = () => nav("/Alarm");
  const CT = () => nav("/Countdown");
  const wc = () => nav("/Worldclock");
  const dc = () => nav("/");

  return (
    <>
      <center>
        <div className="btns">
          <button onClick={dc}>Digiclock</button>
          <button onClick={Stopwatch}>Stopwatch</button>
          <button onClick={wc}>WorldClock</button>
          <button onClick={CT}>Countdown Timer</button>
        </div>
        <div className="alarm">
          <h1>{info}</h1> {/* Displays current time */}
          <div>
            <form onSubmit={save}>
              <span>Hours: </span>
              <input
                type="number"
                min={0}
                max={24}
                placeholder="00"
                onChange={hHours}
                value={hours}
              />
              <br />
              <span>Minutes:</span>
              <input
                type="number"
                min={0}
                max={60}
                placeholder="00"
                onChange={hMinutes}
                value={minutes}
              />
              <br />
              <br />
              <input type="Submit" value="Set Alarm" className="btns" />
            </form>
            {alarm && (
              <div>
                <h1>
                  Alarm is set for {hours}:{minutes}
                </h1>
              </div>
            )}
          </div>
        </div>
      </center>
    </>
  );
}
