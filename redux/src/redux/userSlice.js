import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name: "userData",
    initialState: {
        userData : null
    },
    reducers: {
        login : ( state, action ) => {
            state.userData = action.payload
        },
        logout : (state) => {
            state.userData = null
        }
    }  
})

export const { invalidate } = userSlice.actions
export const selectUser = (state) => state.userData.userData
export default userSlice.reducer
