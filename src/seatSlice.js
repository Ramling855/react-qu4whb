import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  seat: [],
  // all:[],
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
      put: (state, action) => {
    state.seat.push(action.payload)
  },}
});

export const { add, pay, put } = seatSlice.actions;

export default seatSlice.reducer;
