import { configureStore } from '@reduxjs/toolkit';
import userData from './todoSlice'
const store = configureStore({
    reducer: {
        userData: userData
    },
});
export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch