import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsSlice } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(
      contactsConfig,
      contactsSlice,
    ),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor =
  persistStore(store);
