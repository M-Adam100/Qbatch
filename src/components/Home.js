import React,{ useEffect} from 'react';
import { Table,  Space } from 'antd';
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import {getData,deleteData,getUser} from '../store/slices/homeSlice'
import { useHistory } from "react-router-dom";

export default function Home () {
  
  let history = useHistory();
  //const [check,setCheck]=useState(0);
  const user=useSelector(state=>state.home.user)
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
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Actions',
      key: 'action',
       render: (record) => (
        <Space size="middle">
          <button className="badge badge-primary" onClick={()=>{history.push('/show/'+record._id); console.log(record._id)}} >Show </button>
          
          {user._id===record.user_id && <button className="badge badge-secondary" onClick={()=>
            {if (window.confirm('Are you sure you wish to delete this item?'))
            { 
              dispatch(deleteData(record._id)); 
              
            } 
          }
            }>Delete</button>
       } 
         {user._id===record.user_id && <button className="badge badge-success" onClick={()=>
            {
              history.push('/edit/'+record._id);
              window.location.reload()
            }
          }>Edit</button>}
        </Space>
      ),
    },
  ];
      const dispatch = useDispatch();
      const data=useSelector(state=>state.home.data)

    useEffect(() => {
      //console.log("Called")
      dispatch(getData())
      dispatch(getUser())
       
     }, []) 

      if(!localStorage.getItem("user"))
      {
        //alert("You need to sign in first")
        return  <Redirect to ='/' />

       
      }else
        {
          return (
            
            <div>
             
              <Link to='/NewPost' style={{marginLeft: 30}}> New Post </Link>
              
                <Table  columns={columns} dataSource={data}  />
            </div>
        )
    }}
