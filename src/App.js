import React from "react";
import { Todos } from "./components/Todos";
import AddTodo from "./components/AddForm";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "buy something" },
      { id: 2, content: "learn something" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  addTodo = (todo) => {
    todo.id = this.state.todos.length;
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
