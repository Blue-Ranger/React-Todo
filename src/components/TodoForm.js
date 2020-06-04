import React from "react";



class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
        task: ""
        };
// change event
        handleInput(e);{
          this.setState({[e.target.name]: e.target.value});
        };
// change event
        addItem(e);{
        e.preventDefault();
        this.setState({ task: "" });
        this.props.addTodo(e, this.state.task);
    };
        }
// onSubmit


        
  return (
    <form id="to-do-form" onSubmit={this.addItem}>
      <input
        type="text"
        placeholder="Enter Text"
        value={this.state.task}
        onChange={this.handleInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
