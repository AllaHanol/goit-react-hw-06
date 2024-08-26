import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilterValue } =
  filtersSlice.actions;
export const filterValue = (state) =>
  state.filters.name;
export const filtersReducer =
  filtersSlice.reducer;

// export const filterReducer = (
//   state = INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     case "filter/setFilterValue":
//       return {
//         ...state,
//         filterValue: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const setFilterValue = (
//   value,
// ) => ({
//   type: "filter/setFilterValue",
//   payload: value,
// });
