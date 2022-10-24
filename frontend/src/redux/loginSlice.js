import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: undefined,
        token: undefined,
       
        
    },
    reducers: {
       addUser: (state, action) => {
            state.user = action.payload
       },
       addToken: (state, action) => {
        state.token = action.payload
        console.log("State-token: " + state.token);
       },
}});



export const { addUser, addToken} = LoginSlice.actions;
export default LoginSlice.reducer;
