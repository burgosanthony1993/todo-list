//Parent Component
/*Render the NewTodoForm Component, 
should render the list of Todo components. 
Please the states that contains all of the todos in this component*/

import React, {Component} from "react"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    //Public Class Field Syntax Method of declaring props
    state = {
        //items list is an array of examples
        items: [
            {id: uuidv4(), thingsToDo: "Complete Project", dueDate: "Next Week", priority: "Low"},
            {id: uuidv4(), thingsToDo: "Laundry", dueDate: "Tomorrow", priority: "High"},
            {id: uuidv4(), thingsToDo: "Submit Form", dueDate: "Today at 4 pm", priority: "Very High"}
        ],
        //props to be passed down to child
        newItem: {
            thingsToDo: "",
            dueDate: "",
            priority: ""
        }
    }

    //Using PCFS, Arrow Functions automatically bind this
    handleSubmit = (evt) => {
        evt.preventDefault();
        // Update items with the new item details
        this.setState((prevState) => ({
            items: [...prevState.items, { ...prevState.newItem, id: uuidv4() }],
            newItem: { thingsToDo: '', dueDate: '', priority: '' } // Resetting newItem state
        }));
    };

    handleChange = (evt) => {
        const { name, value } = evt.target;
        this.setState((prevState) => ({
            newItem: {
                ...prevState.newItem,
                [name]: value
            }
        }));
    };

    removeItem = (id) => {
        this.setState((st) => ({
        items: st.items.filter((item) => item.id !== id),
        }));
    };

    //maps array renders a list (iterate through a list of anything)
    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                {this.state.items.map(item => (
                        <li key={item.id}>
                            {/* Pass props to Todo component */}    
                            <Todo 
                            key={item.id}
                            id={item.id}
                            thingsToDo={item.thingsToDo}
                            dueDate={item.dueDate}
                            priority={item.priority}
                            removeItem={() => this.removeItem(item.id)}
                            />
                        </li>
                ))}
                </ul>
                    <NewTodoForm
                        newItem={this.state.newItem}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
            </div>
        )
    }
}

export default TodoList;