import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <AddTodo addTodoFn={this.addTodo} />
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      // setState is an async function. pass in object
      // update todos set it equal to savedTodos
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  addTodo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      else return _todo;
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
