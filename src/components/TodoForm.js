import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };
  // event change
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // event change submit functionality
  handleSubmit = (e) => {
    e.preventDefault();
    //enter properties
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    //clears the text field you hit enter
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={this.handleSubmit}
      >
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
