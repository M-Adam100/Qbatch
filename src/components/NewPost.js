import React from 'react'
import {Redirect} from 'react-router-dom'
import {addPost} from '../store/slices/homeSlice'
import {  useDispatch } from 'react-redux';
import {useState} from 'react'

export default function NewPost(props) {
   
       
        const [subject,setSubject]=useState('');
        const[body,setBody]=useState('');
        const dispatch = useDispatch();
        if(!localStorage.getItem("user"))
      {
        return <Redirect to ='/' />
       
      }else
        {return (
            <div>
                <form>
                    <div className="form-group">
                        <input style={{margin: 10,width:200}} type="text" className="form-control "  value={subject} placeholder="Subject" onChange={(e)=>setSubject( e.target.value)}/>
                    </div>
                    
                    
                    <div className="form-group">
                        <textarea style={{margin: 10,width: 400}} className="form-control"  rows="3" value={body} onChange={(e)=>setBody( e.target.value)}></textarea>
                    </div>
                </form>
                

                <button className="btn btn-success" style={{marginLeft: 20}} type="Submit" onClick={
                    ()=>{
                        dispatch(addPost(subject,body));
                        props.history.push('/home/')}}>Add Post</button>
            </div>
        );
        }
        
    }
