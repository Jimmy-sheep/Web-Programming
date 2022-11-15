import logo from './logo.svg';
import './App.css';
import HelloCGU from './HelloCGU';
import Multibutton from './Multibutton';

function App() {
  return (
    <div className="App">
		<div>{HelloCGU()}</div>
		<div>{Multibutton(10)}</div>
    </div>
  );
}

export default App;
