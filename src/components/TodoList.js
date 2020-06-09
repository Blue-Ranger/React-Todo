import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todosToShow: "all",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todosToShow: s,
    });
  };
  // passed in "state =>" within the function setState to make it possible to remove "this." on line 42. Which is an alternate way than line 46.
  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  //will add your todo item
  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            width: "30%",
            margin: "auto",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          remaining active todos:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button
            style={{
              display: "flex",
              marginLeft: "45%",
              marginTop: "1%",
              marginBottom: "1%",
            }}
            onClick={() => this.updateTodoToShow("all")}
          >
            Show All Task
          </button>
          <button
            style={{
              display: "flex",
              marginLeft: "45%",
              marginTop: "1%",
              marginBottom: "1%",
            }}
            onClick={() => this.updateTodoToShow("active")}
          >
            Show Active Task
          </button>
          <button
            style={{
              display: "flex",
              marginLeft: "45%",
              marginTop: "1%",
              marginBottom: "1%",
            }}
            onClick={() => this.updateTodoToShow("complete")}
          >
            Show Completed Task
          </button>
        </div>
        {this.state.todos.filter((todo) => todo.complete).length ? (
          <div>
            <button
              style={{ display: "flex", marginLeft: "45%" }}
              onClick={this.removeAllTodosThatAreComplete}
            >
              Remove All Completed Todos
            </button>
          </div>
        ) : null}

        <div>
          <button
            style={{
              display: "flex",
              marginLeft: "45%",
              marginTop: "1%",
              marginBottom: "1%",
            }}
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !state.toggleAllComplete,
              }))
            }
          >
            Toggle All Task Completed:{`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}

// line 99, passes a function that returns the new value of a state that you want to update.
// line 99 uses in-line format to add the toggleAllComplete function directly into the onClick function
// line 99, passed in "state =>" within the function setState to make it possible to remove "this." on lines 100, 102, and 104. Which is an alternate way than line 46.
