//Parent Component
/*Render the NewTodoForm Component, 
should render the list of Todo components. 
Please the states that contains all of the todos in this component*/

import React, {Component} from "react"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo"

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
        newItems: {
            thingsToDo: "",
            dueDate: "",
            priority: ""
        }
    }
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
                            />
                        </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;