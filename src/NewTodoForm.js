//Todo Form Component
import React, {Component} from "react"

class NewTodoForm extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="thingsToDo">Things to Do </label>
                <input
                    id="thingsToDo"
                    name="thingsToDo"
                    value={this.props.newItem.thingsToDo}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="dueDate">Due Date: </label>
                <input
                    id="dueDate"
                    name="dueDate"
                    value={this.props.newItem.dueDate}
                    onChange={this.props.handleChange}
                />
                <label htmlFor="priority">Priority: </label>
                <input
                    id="priority"
                    name="priority"
                    value={this.props.newItem.priority}
                    onChange={this.props.handleChange}
                />
            <button>Submit Button</button>
            </form>
        </div>
        )
    }
}

export default NewTodoForm;