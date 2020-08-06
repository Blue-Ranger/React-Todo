import React from "react";

//line 21 todoList
export default (props) => (
  //places the delete button to the right of the todo task
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      //styling draws a line through completed task when clicked
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>

    <button onClick={props.onDelete}>Delete</button>
  </div>
);
