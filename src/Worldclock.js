import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Worldclock() {
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/timezone");
        const data = await response.json();
        setTimezones(data);
      } catch (error) {
        console.error("Error fetching timezones:", error);
      }
    };

    fetchTimezones();
  }, []);

  const fetchTimeByTimezone = async (timezone) => {
    try {
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${timezone}`
      );
      const data = await response.json();
      setSelectedTime(data.datetime);
    } catch (error) {
      console.error(`Error fetching time for ${timezone}:`, error);
      setSelectedTime("");
    }
  };

  const handleTimezoneChange = (event) => {
    const timezone = event.target.value;
    setSelectedTimezone(timezone);
    setSelectedTime("");

    if (timezone) {
      fetchTimeByTimezone(timezone);
    }
  };
  const Stopwatch = (event) => {
    nav("/Stopwatch");
  };
  const Alrm = (event) => {
    nav("/Alarm");
  };
  const CT = (event) => {
    nav("/Countdown");
  };
  const wc = (event) => {
    nav("/Worldclock");
  };
  const dc = (event) => {
    nav("/");
  };

  return (
    <div className="world-clock">
      <center>
        <div className="btns">
          <button onClick={dc}>Digiclock</button>
          <button onClick={Stopwatch}>Stopwatch</button>

          <button onClick={CT}>Countdown Timer</button>
          <button onClick={Alrm}>Alarm</button>
        </div>
        <h2>World Clock</h2>
        <div className="world">
          <select value={selectedTimezone} onChange={handleTimezoneChange}>
            <option value="">Select a timezone</option>
            {timezones.map((timezone, index) => (
              <option key={index} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
          {selectedTimezone && (
            <div>
              <strong>{selectedTimezone}</strong>:<br/>{" "}
              {selectedTime || "Fetching time..."}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default Worldclock;
