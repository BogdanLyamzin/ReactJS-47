import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import booksReducer from './books/books-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: "books",
    storage,
    whitelist: ["books"],
    // blacklist: ["fliter"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);


