import { configureStore, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            // console.log('setUser',action)
            state.isAuthenticated = true
            state.user = action.payload
        },
        clearUser: state => {
            state.isAuthenticated = false
            state.user = null
        },
    },
})

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
})
