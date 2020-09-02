import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL="http://localhost:3000/api"

const edit=createSlice({
    name: "edit",
    initialState: {
        subject: null,
        body: null
        
    },
    reducers:{ 
        showOne: (state,action)=>{
            state.subject=action.payload[0].subject
            state.body=action.payload[0].body
            
            
        },
        updatePost: (state,action)=>{  
            
            state.subject=action.payload.subject
            state.body=action.payload.body
        },
    }
})

const {updatePost}=edit.actions
const {showOne}=edit.actions

export const showPost=(id)=>async dispatch=>{
    await axios({
         method: 'get',
         url: API_URL+'/home/'+id,
       }).then(response=>{
         
           dispatch(showOne(response.data))
           
       })
       
   
 }

export const editPost=(subject,body,id)=>async dispatch=>{
    
    axios({
        method: 'post',
        url: API_URL+'/update/'+id,
        data: {
            subject,
            body,
        }
      }).then(response=>{
           
            dispatch(updatePost(response.data))
      });
      
  
}



export default edit.reducer