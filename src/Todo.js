//Child Componenet
//Display a div with the task of the todo

import React, { Component } from "react"

class Todo extends Component {

    handleRemove = (evt) => {
        evt.preventDefault();
        // Call the function passed as a prop to remove this box
        this.props.removeItem();
    };

    render(){
        //Access to the props passed down from the parent
        //returns display props
        const {thingsToDo, dueDate,priority} = this.props;
        return (
            <div>
                <h3>Task: {thingsToDo}</h3>
                <p>Due Date: {dueDate}</p>
                <p>Priority: {priority}</p>
                <button onClick={this.handleRemove}>X to Delete</button>
            </div>
        )
    }
}

export default Todo;