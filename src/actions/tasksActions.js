import * as TaskTypes from "../constants/tasksTypes";

export const addTaskAction = (id, status, description, time) => (dispatch) => {
  dispatch({
    type: TaskTypes.ADD_TASK,
    payload: {
      id,
      status,
      description,
      time,
    },
  });
};

export const deleteTaskAction = (id) => (dispatch) => {
  dispatch({
    type: TaskTypes.DELETE_TASK,
    payload: { id },
  });
};

export const completeTaskAction = (id) => (dispatch) => {
  dispatch({
    type: TaskTypes.COMPLETE_TASK,
    payload: { id },
  });
};
