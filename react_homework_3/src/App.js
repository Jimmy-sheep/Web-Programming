import logo from './logo.svg';
import './App.css';
import Title from './Title';
import InputBox from './InputBox';
import MultiButton from './MultiButton';

function App() {
	return (
		<div className="App">
		<div>{Title()}</div>
		<div>{InputBox()}</div>
		<div>{MultiButton()}</div>
        </div>
	);
}

export default App;
