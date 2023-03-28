import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IPostsState {
    loading: boolean;
    error: null | string;
    data: null | IPosts[]
}

const JSON_API = "https://jsonplaceholder.typicode.com/posts?_limit=10"

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (data, thunkAPI) => {
        try{
            const response = await axios.get<IPosts[]>(JSON_API);
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    loading: false,
    error: null,
    data: null
} as IPostsState;

const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(getPosts.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload //get the error from thunkAPI.rejectWithValue
        })
    }
})

export default postsSlice.reducer; 