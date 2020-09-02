import React from 'react'
import {Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {editPost} from '../store/slices/editSlice'
import {showPost} from '../store/slices/editSlice'
import {useEffect,useState} from 'react'

export default function EditPost(props){
    
    const _subject=useSelector(state=>state.edit.subject)
    const _body=useSelector(state=>state.edit.body)
    let [subject,setSubject]=useState(null)
    let [body,setBody]=useState(null)
   
    const dispatch = useDispatch();
    if(!subject && !body && _subject && _body)
    {
        setSubject(_subject)
        setBody(_body)
        
    }
    useEffect(()=>{
       
        dispatch(showPost(props.match.params.id))
        
    },[])
        
        if(!localStorage.getItem("user"))
        {
          return <Redirect to ='/' />
         
        }else if(subject && body)
        {
            return (
            <div>
                <form>
                    <div className="form-group">
                        <input style={{margin: 10,width:200}} type="text" className="form-control " value={subject} id="subject" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
                    </div>
                    
                    
                    <div className="form-group">
                        <textarea style={{margin: 10,width: 400}} className="form-control" id="body" rows="3" value={body} onChange={e => setBody(e.target.value)} ></textarea>
                    </div>
                </form>
                

                <button className="btn btn-success" style={{marginLeft: 20}} type="Submit"  
                onClick=
                {
                    (e)=>{
                        e.preventDefault();
                       
                        dispatch(editPost(subject,body,props.match.params.id));
                        props.history.push('/home/')
                        } }>Update Post</button>
            </div>
        );
        }else
        return <h2>................Loading.....................</h2>
        
    }

