import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    checkIt: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTodo, checkIt} = todoSlice.actions;

export default todoSlice.reducer;
