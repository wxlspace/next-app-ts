import { createSlice, configureStore } from "@reduxjs/toolkit";

// 创建一个菜单权限集合的状态切片
const authRoutesSlice = createSlice({
    name: 'authroutes',
    initialState: [], // {}
    reducers: {
        setAuthRoutes: (state, action) => {
            // return { ...state, value: action.payload }
            return action.payload
        }
    }
})

// 创建一个按纽权限集合的状态切片
const authBtnSlice = createSlice({
    name: 'authbtns',
    initialState: [],
    reducers: {
        setAuthBtns: (state, action) => {
            return action.payload
        }
    }
})

// 初始化store
const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        authmenus: authRoutesSlice.reducer,
        authbtns: authBtnSlice.reducer,
    }
})


export {
    store,
    authRoutesSlice,
    authBtnSlice
}