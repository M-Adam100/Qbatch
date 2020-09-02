import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react'
import {login} from '../store/slices/authSlice'
import Copyright from '../components/CopyRight.js'





export default function Login() {
  
  let isLoggedIn=useSelector(state=>state.auth.loggedIn)
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const dispatch = useDispatch();
    if(localStorage.getItem("user"))
    {
      isLoggedIn=true
    }
    if(isLoggedIn)
    {
      return <Redirect to="/home"/> 
    }else
       { return (
         
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{ flex: 'column', alignItems: 'center',}}>
              <Avatar style={{marginLeft: "37.5%"}} >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{marginLeft:"33.5%"}}>
                Sign in
              </Typography>
              <form style={{marginTop: 1}} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event)=>{setEmail(event.target.value)}}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event)=>{setPassword( event.target.value)}}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color= 'primary'
                  className="submit"
                  style={{marginBottom: 3}}
                  
                  onClick={e=>{
                    e.preventDefault();
                    dispatch(login(email,password));
                  }
                  }
                >
                  Sign In  
                </Button>
                <Grid container>
                  <Grid item xs>
                    <a href=" " variant="body2">
                      Forgot password?
                    </a>
                  </Grid>
                  <Grid item>
                    <Link to="/signUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        );
        }
      }
