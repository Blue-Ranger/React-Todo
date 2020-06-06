import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;

    return (
      <div
        className={"todoItem" + (todo.completed ? " completed" : "")}
        onClick={this.toggleTodo}
      >
        {todo.text}
      </div>
    );
  }

  //state function to execute
  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  };
}
export default TodoItem;
