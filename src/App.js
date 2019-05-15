import React, { Component } from "react";
import TaskButtons from "./components/task-buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, description: "Ir ao supermercado", done: false },
        {
          id: 2,
          description: "Trocar a lâmpada do freio do carro",
          done: true
        },
        {
          id: 3,
          description: "Começar a 3ª parte da série sobre React",
          done: false
        }
      ]
    }
  }

  modifyTaskStatus(taskId, done) {
    let state = Object.assign({}, this.state);
    state.tasks.find(t => t.id === taskId).done = done;
    this.setState(state);
  }

  removeTask = (taskId) => () => {
    let state = Object.assign({}, this.state);
    state.tasks = state.tasks.filter(t => t.id !== taskId);
    this.setState(state);
  }

  completeTask = (taskId) => () => {
    this.modifyTaskStatus(taskId, true)
  }

  resetTask = (taskId) => () => {
    this.modifyTaskStatus(taskId, false);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>
              {task.description}
              <TaskButtons
                task={task}
                completeTask={this.completeTask}
                resetTask={this.resetTask}
                removeTask={this.removeTask}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
