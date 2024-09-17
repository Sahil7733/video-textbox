import { createSlice } from '@reduxjs/toolkit';

const textBoxSlice = createSlice({
  name: 'textBoxes',
  initialState: [],
  reducers: {
    addTextBox: (state, action) => {
      state.push(action.payload);
    },
    updateTextBox: (state, action) => {
      const { id, ...changes } = action.payload;
      const textBox = state.find(tb => tb.id === id);
      if (textBox) {
        Object.assign(textBox, changes);
      }
    },
    deleteTextBox: (state, action) => {
      return state.filter(tb => tb.id !== action.payload);
    },
  },
});

export const { addTextBox, updateTextBox, deleteTextBox } = textBoxSlice.actions;
export default textBoxSlice.reducer;
