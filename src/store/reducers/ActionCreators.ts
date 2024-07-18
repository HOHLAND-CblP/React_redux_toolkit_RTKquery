import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./userSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

/*export const fetchUsers = async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch(e) {
        let errorMessage: string = 'Ошибка загрузки';
        if (typeof e === "string") {
            errorMessage = e.toUpperCase() // works, `e` narrowed to string
        } else if (e instanceof Error) {
            errorMessage = e.message // works, `e` narrowed to Error
        }
        dispatch(userSlice.actions.usersFetchingError(errorMessage))
    }
}*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi)=> {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/user2s");
            return response.data;          
        } catch (e) {
            let errorMessage: string = 'Ошибка загрузки';
            if (typeof e === "string") {
                    errorMessage = e.toUpperCase() // works, `e` narrowed to string
            } else if (e instanceof Error) {
                    errorMessage = e.message // works, `e` narrowed to Error
            } 
            return thunkApi.rejectWithValue(errorMessage);
        }
    }
)