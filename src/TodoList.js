//Parent Component
/*Render the NewTodoForm Component, 
should render the list of Todo components. 
Please the states that contains all of the todos in this component*/

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    state = {
        items: [
            { id: uuidv4(), thingsToDo: "Complete Project", dueDate: "Next Week", priority: "Low" },
            { id: uuidv4(), thingsToDo: "Laundry", dueDate: "Tomorrow", priority: "High" },
            { id: uuidv4(), thingsToDo: "Submit Form", dueDate: "Today at 4 pm", priority: "Very High" }
        ],
        newItem: {
            thingsToDo: "",
            dueDate: "",
            priority: ""
        }
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState((prevState) => ({
            items: [...prevState.items, { ...prevState.newItem, id: uuidv4() }],
            newItem: { thingsToDo: "", dueDate: "", priority: "" }
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
            items: st.items.filter((item) => item.id !== id)
        }));
    };

    update = (id, updatedTask) => {
        const updatedTodos = this.state.items.map((todo) => {
            if (todo.id === id) {
                return { ...todo, thingsToDo: updatedTask };
            }
            return todo;
        });
        this.setState({ items: updatedTodos });
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {this.state.items.map((item) => (
                        <li key={item.id}>
                            <Todo
                                key={item.id}
                                id={item.id}
                                thingsToDo={item.thingsToDo}
                                dueDate={item.dueDate}
                                priority={item.priority}
                                removeItem={() => this.removeItem(item.id)}
                                updatedTodos={this.update}
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
        );
    }
}

export default TodoList;
