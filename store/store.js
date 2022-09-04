import { configureStore } from '@reduxjs/toolkit'
import modalBoxReducer from './features/modalBox'

export default configureStore({
    reducer: {
        modalBoxForm : modalBoxReducer,
    }
})