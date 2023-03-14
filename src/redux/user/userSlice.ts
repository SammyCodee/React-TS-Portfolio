import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import loginTypes from '../../components/login/types';

const initialState: loginTypes = {
    username: '',
    password: ''
}

export const userReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<loginTypes>) => {
            state.username = action.payload.username,
            state.password = action.payload.password
        },
        logout: (state) => {
            state.username = '',
            state.password = ''
        }
    }
})

export const {login, logout} = userReducer.actions;
export default userReducer.reducer;