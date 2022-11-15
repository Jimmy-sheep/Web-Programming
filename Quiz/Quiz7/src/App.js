import logo from './logo.svg';
import './App.css';
import LoginTitle from './LoginTitle.js';
import LoginInputBox from './LoginInputBox.js';
import LoginMultiButton from './LoginMultiButton.js';
import ToDoRun from './ToDoRun.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
		<div>{LoginTitle()}</div>
			<Router>
					<div>{LoginInputBox()}</div>
					<Link to="/Todo">{LoginMultiButton()}</Link>
				<Switch>
					<Route path="/Todo" component={ToDoRun} />
				</Switch>
			</Router>
        </div>
	);
}
export default App