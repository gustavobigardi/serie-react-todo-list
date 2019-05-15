import React, { Fragment } from "react"

const TaskButtons = ({ task, completeTask, resetTask, removeTask }) => {

  return (
    <Fragment>
      {task.description}
      {!task.done ? (
        <button onClick={completeTask(task.id)}>Finalizar</button>
      ) : null}
      {task.done ? (
        <button onClick={resetTask(task.id)}>Reativar</button>
      ) : null}
      <button onClick={removeTask(task.id)}>Remover</button>
    </Fragment>
  );
};

export default TaskButtons