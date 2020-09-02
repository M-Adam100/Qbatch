import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import "../src/styles/App.css"
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Show from "./components/ShowPost"
import NewPost from "./components/NewPost";
import Edit from "./components/Edit"

function App() {
  
    return (
      <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/show/:id" component={Show}/>
            <Route path="/NewPost" component={NewPost}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="*" component={Home} />
          </Switch>
       
      </Router>
    );
  }


export default App;
