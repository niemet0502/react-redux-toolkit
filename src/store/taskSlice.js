import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tasks: [
    {
      id: 1,
      title: "plain redux 1",
      detail: "write the technical post on redux",
    },
    {
      id: 2,
      title: "plain redux 2",
      detail: "write the technical post on redux",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.isLoading = false;
      state.tasks = [...state.tasks, action.payload];
    },
    getTaskLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { addTask } = taskSlice.actions; // generate actions
export const tasksSelector = (state) => state.tasks; // create selector

export default taskSlice.reducer;
