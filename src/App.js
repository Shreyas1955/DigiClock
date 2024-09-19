import logo from './logo.svg';
import './App.css';
import Digiclock from './Digiclock';
import Worldclock from './Worldclock';
import Stopwatch from './Stopwatch';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Alarm from './Alarm';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Digiclock/> } />
        <Route path='/Countdown' element={<Countdown/> } />
        <Route path='/Worldclock' element={<Worldclock/> } />
        <Route path='/Stopwatch' element={<Stopwatch/> } />
        <Route path='/Alarm' element={<Alarm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
