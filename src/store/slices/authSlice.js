import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
const API_URL="http://localhost:3000/api"

export const authSlice = createSlice({
  name:"authorization",
  initialState: {
    loggedIn: null,
  },
  reducers: {
    signIn: (state) => {
      state.loggedIn = true;
    },
    signUp: ()=>{},
    signOut: (state)=>{
     
      state.loggedIn=false;
    }
  }
})
const {signIn}=authSlice.actions
const {signOut}=authSlice.actions
const {signUp}=authSlice.actions

export const login = (email, password) => async dispatch => {
   
  
      await axios({
        method: 'post',
        url: API_URL+"/login",
        data: {
            email: email,
            password: password
        }
      }).then(response=>{
        if(response.data===403)
        {
          alert("No such user exists!")
        }else if(response.data===401)
        {
          alert("Wrong Password")
        }
        else
        {
          localStorage.setItem("user", JSON.stringify(response.data));
          dispatch(signIn())
      }
       
      })


};

export const register=(firstName,lastName,email,password)=>async dispatch=>{
await axios({
  method: 'post',
  url: API_URL+'/register',
  data: {
    firstName,
    lastName,
    email,
    password
  }
}).then(response=>
  {
      alert("User registered successfully")
      dispatch(signUp(response.data))

  });
}

export const logOut=()=>async dispatch=>{
  
  localStorage.clear();
  dispatch(signOut())
}


export default authSlice.reducer;