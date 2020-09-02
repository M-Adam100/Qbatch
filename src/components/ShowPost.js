import React from 'react';
import { Table} from 'antd';
import {Redirect} from 'react-router-dom'
import { useSelector} from 'react-redux';
import {showPost} from '../store/slices/showSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'


const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    
  ];


export default function ShowPost(props) {


    const data=useSelector(state=>state.show.data)
    const dispatch = useDispatch();

    useEffect(()=>{
      
        dispatch(showPost(props.match.params.id))
        
    },[])
    
      if(!localStorage.getItem("user"))
      {
        return <Redirect to ='/' />
       
      }else
        {return (
          
            <div>
                <Table columns={columns} dataSource={data} />
                
            </div>
        )}
    }






