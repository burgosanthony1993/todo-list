//Child Componenet
//Display a div with the task of the todo

import React, { Component } from "react";

class Todo extends Component {
    state = {
        isEditing: false,
        thingsToDo: this.props.thingsToDo
    };

    handleRemove = (evt) => {
        evt.preventDefault();
        // Call the function passed as a prop to remove this box
        this.props.removeItem();
    };

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleUpdate = (evt) => {
        evt.preventDefault();
        // Take new task data and pass up to parent
        this.props.updatedTodos(this.props.id, this.state.thingsToDo);
        this.setState({ isEditing: false });
    };

    handleChange = (evt) => {
        const { value } = evt.target;
        this.setState({ thingsToDo: value });
    };

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.thingsToDo}
                            name="thingsToDo"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            const { thingsToDo, dueDate, priority } = this.props;
            result = (
                <div>
                    <h3>Task: {thingsToDo}</h3>
                    <p>Due Date: {dueDate}</p>
                    <p>Priority: {priority}</p>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X to Delete</button>
                </div>
            );
        }

        return result;
    }
}

export default Todo;
