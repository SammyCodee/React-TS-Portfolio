import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = 'b496e6910b5992a91a5c448ef0a000a0';

interface IWeather {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    };
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    }
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface IWeatherState {
    loading: boolean;
    error: null | string;
    data: null | IWeather
}

const geoLocation = {
    kl: {
        long: 101.68685500,
        lat: 3.13900300
    }
}
console.log('API_KEY', API_KEY)
let weather_API = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async(data, thunkAPI) => {
        try{
            const res = await axios.get<IWeather>(weather_API);
            return res.data
        } catch(error: any){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    loading: false,
    error: null,   
    data: null
} as IWeatherState;

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(getWeather.pending, (state) => {
            state.loading = true
        })
        .addCase(getWeather.fulfilled, (state, action: PayloadAction<IWeather>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getWeather.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload //get the error from thunkAPI.rejectWithValue
        })
    }
})

export default weatherSlice.reducer