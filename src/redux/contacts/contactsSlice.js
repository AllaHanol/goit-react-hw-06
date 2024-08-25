import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: [],
  showContactList: true,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(
        action.payload,
      );
    },
    deleteContact: (state, action) => {
      state.contacts =
        state.contacts.filter(
          (contact) =>
            contact.id !==
            action.payload,
        );
    },
    // showContactList: (
    //   state,
    //   action,
    // ) => {
    //   state.showContactList =
    //     action.payload;
    // },
  },
});

export const contactsReducer =
  contactsSlice.reducer;
export const {
  addContact,
  deleteContact,
} = contactsSlice.actions;
