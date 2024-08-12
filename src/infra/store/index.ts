import { configureStore } from "@reduxjs/toolkit";
import { clientReducer as client } from "@/app/reducers";

export const store = configureStore({
    reducer: {
        client
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export type AppDispatch = typeof store.dispatch