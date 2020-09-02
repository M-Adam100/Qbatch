import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL="http://localhost:3000/api"

const show=createSlice({
    name: "show",
    initialState: {
        data: null,   
    },
    reducers:{ 
        showOne: (state,action)=>{
            state.data=action.payload
            
        }
    }
})
const {showOne}=show.actions

export const showPost=(id)=>async dispatch=>{
   await axios({
        method: 'get',
        url: API_URL+'/home/'+id,
      }).then(response=>{
         console.log(response.data)
          dispatch(showOne(response.data))
          
      })
      
  
}



export default show.reducer