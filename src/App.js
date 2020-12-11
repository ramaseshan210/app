import React, { Component } from 'react'
import './App.css';
import { Switch } from '@material-ui/core';
import Forms from "./Forms"
import Header from "./Header"

import Use from './Use';
import {BrowserRouter as Router, Route } from "react-router-dom"; 


class App extends Component {
 
   state= {
      myString:"Hello",
      myStringOne:"hey ram",
      string:"hai",
      label:"press me",
      counter: 0
   };



   onCounter = () => {

      this.setState({
            counter:this.state.counter + 1
      });


   };                                                       


   onCount = () =>{

      if(this.state.string === "hai")
      {
         
      this.setState({   
         string:"django"});
      }
      else if(this.state.string === "django")
      {
         this.setState({
               string:"hai"});
         
      }
};

   onHandle = () => {
      if(this.state.myStringOne === "hey ram")
      { 
            this.setState({
               myStringOne:"rajavu"});
      }
      else if(this.state.myStringOne === "rajavu")
      {
      this.setState({
         myStringOne:"hey ram"
      });
   };

  

}

   render(){
      return (
         <div>

    
               <Router>
                  <Header/>
                  <Route path="/"component={Forms}/>
                   <Route path="./about"component={Use}/>
               </Router>
            





        
           {/* <Useforms/>*/}
           {/*<Forms />*/}
           {/* <Header/> *}
            
            <h1>hello</h1>
            <h1>{this.state.myStringOne}</h1>
            <button onClick={this.onHandle}>{this.state.label}</button>
            <button onClick={this.onCount}>count</button>
            <button onClick={this.onCounter}>counter</button>
          {/* <Todo myStringOne={this.state.myStringOne}/>
           <Todo myStringOne={this.state.string}/>
           <Todo myStringOne={this.state.counter}/>
           */}
           
         </div>
      );
   }
}  


export default App;