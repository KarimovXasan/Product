import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const found = state.value.find(i => i.id == action.payload.id)
            if (!found) {
                state.value.push(action.payload);
            }else {
                alert("Bu oldindan mavjud")
            }
        },
        deletCart: (state, action) => {
            state.value = state.value.filter(i => i.id !== action.payload)      
        }
    },
})

export const { addCart , deletCart } = cardSlice.actions

export default cardSlice.reducer
