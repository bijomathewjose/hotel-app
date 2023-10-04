import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from './propertySlice'
export default configureStore({
    reducer: {
        propertyReducer
    },
})