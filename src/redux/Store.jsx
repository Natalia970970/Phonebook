import { configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from "./FilterSlice";
import { authReducer } from './AuthSlice';


const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedAuthReducer,
    },
        
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
});

export const persistor = persistStore(store);
