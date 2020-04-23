import React from "react";
import { Todos } from "./components/Todos";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "buy something" },
      { id: 1, content: "learn something" },
    ],
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
