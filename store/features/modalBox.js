import { createSlice } from '@reduxjs/toolkit'

export const boxModal = createSlice({
    name: 'modalBoxForm',
    initialState: {
        value: false
    },
    reducers: {
        show: state => {
            state.value = true;
        },
        close: state => {
            state.value = false;
        },
    }
});

// Action creators are generated for each case reducer function
export const { show, close } = boxModal.actions;

export default boxModal.reducer;