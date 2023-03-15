import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {user} from '../../pages/login/types';

const initialState: user = {
    user: {
        username: '',
        password: ''
    },
    isSuccess: false
    
}

export const userReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        tryLogin: (state, action: PayloadAction<user>) => {
            state.user.username = action.payload.user.username,
            state.user.password = action.payload.user.password,
            state.isSuccess = false
        },
        loginSuccess: (state) => {
            state.isSuccess = true
        },
        loginFailed: (state) => {
            state.user.username = '',
            state.user.password = '',
            state.isSuccess = false
        },
        remove: (state) => {
            state.user.username = '',
            state.user.password = ''
        },
    }
})

export const { tryLogin, loginSuccess, loginFailed, remove } = userReducer.actions;
export default userReducer.reducer;