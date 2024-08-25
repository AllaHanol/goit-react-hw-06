import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.filterValue =
        action.payload;
    },
  },
});

export const { setFilterValue } =
  filterSlice.actions;
export default filterSlice.reducer;

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
