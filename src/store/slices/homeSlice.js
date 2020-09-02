import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL="http://localhost:3000/api"

const home=createSlice({
    name: "login",
    initialState: {
        data: null,
        user: null
        
    },
    reducers:{ 
        getPosts: (state,action)=>{
            
            state.data= action.payload
           
        },
        deletePost: (state,action)=>{
          
            const newValue = state.data.filter( (id)=> id._id !== action.payload)
            
            state.data=newValue
        },
         createPost: (state,action)=>{
             //console.log("Hello")
            state.data.push(action.payload)
        },
        currentUser: (state,action)=>{
            state.user=action.payload
        }
    }
})

const {getPosts}=home.actions
const {deletePost}=home.actions
const {createPost}=home.actions
const {currentUser} =home.actions

export  const getData=()=>async dispatch=>{
    const user = JSON.parse(localStorage.getItem('user'));
   if(user)
    {
      await axios.get(API_URL+'/home/',{
      headers: {
        'authorization': "BEARER "+user
           }}
    )
        .then(response => {
          
            dispatch(getPosts(response.data))
            
        })
        .catch(function (error){
         
            console.log(error);
        })
      }
      else
      {
        alert("You need to Sign In first")
      }
}

export const deleteData=(id)=>async dispatch=>{
    await axios({
        method: 'delete',
        url: API_URL+'/delete/'+id,
      }).then(response=>{
         
          dispatch(deletePost(id))
      })
      
  
}
export const addPost=(subject,body)=>async dispatch=>{
    const user = JSON.parse(localStorage.getItem('user'));
    await axios({
        method: 'post',
        url: API_URL+'/newpost',
        data: {
            subject,
            body
        },headers: {
            'authorization': "BEARER "+user
               }
      }).then(response=>{
          dispatch(createPost(response.data))
      })

      
}

export const getUser=()=>async dispatch=>{
    const user=JSON.parse(localStorage.getItem('user'));
    await axios({
        method: 'get',
        url: API_URL+'/getUser',
    headers: {
        'authorization': "BEARER "+user
           }

        }).then(response=>{
            dispatch(currentUser(response.data))
        })
    }      



export default home.reducer