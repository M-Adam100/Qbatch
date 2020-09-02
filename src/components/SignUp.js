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
import Container from '@material-ui/core/Container';
import { Link  } from "react-router-dom";
import {useState} from 'react'
import {  useDispatch } from 'react-redux';
import {register} from '../store/slices/authSlice'
import Copyright from '../components/CopyRight.js'


export default function SignUp(props)  {

  const [firstName,setfirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const dispatch = useDispatch();
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{ flex: 'column', alignItems: 'center',}}>
            <Avatar style={{marginLeft: "37.5%"}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{marginLeft:"33.5%", marginBottom: 10}}>
              Sign up
            </Typography>
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event)=>{setfirstName(event.target.value)}}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={(event)=>{setLastName(event.target.value)}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event)=>{setEmail(event.target.value)}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event)=>{setPassword(event.target.value)}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree to the terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                onClick={e=>{
                  e.preventDefault();
                  dispatch(register(firstName,lastName,email,password));
                  props.history.push('/')
                }
                }
                style={{marginBottom: 3}}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      );
  }
