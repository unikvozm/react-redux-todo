import * as TaskTypes from "../constants/tasksTypes";
import * as StatusTypes from "../constants/statusTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      status: StatusTypes.PENDING,
      description: "Eat",
      time: "11:00 AM",
    },
    {
      id: 2,
      status: StatusTypes.PENDING,
      description: "Sleep",
      time: "11:00 PM",
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TaskTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case TaskTypes.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.status = StatusTypes.COMPLETED;
		  }
		  return task;
        }),
      };
    default:
      return state;
  }
};
