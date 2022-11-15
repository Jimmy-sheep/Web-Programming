import React from 'react';
import ToDoRun from "./ToDoApp.js"

class ToDo extends React.Component{
    render() {
        return (
			<div>
				{ToDoRun()}
			</div>
		);
    }
}
export default ToDoRun