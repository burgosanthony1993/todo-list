//Child Componenet
//Display a div with the task of the todo

import React, { Component } from "react"

class Todo extends Component {
    render(){
        //Access to the props passed down from the parent
        //returns display props
        const {thingsToDo, dueDate,priority} = this.props;
        return (
            <div>
                <h3>Task: {thingsToDo}</h3>
                <p>Due Date: {dueDate}</p>
                <p>Priority: {priority}</p>
            </div>
        )
    }
}

export default Todo;