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
    remv: (state, action) => {
      const tt=state.data.filter(rem=>rem.seatNo!==action.payload.seatNo)
      state.data=tt;
    },




      put: (state, action) => {
    state.seat.push(action.payload)
  },}
});

export const { add, pay, put,remv } = seatSlice.actions;

export default seatSlice.reducer;
