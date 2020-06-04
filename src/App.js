import React from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.handleInput.bind(this);
  }
  render() {
    return (
      <div className="App">
        <h2>Todo App!</h2>
        <h1>{this.state.message}</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
