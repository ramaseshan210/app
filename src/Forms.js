import React, { Component } from 'react'
import './Forms.css'
import Switch from  '@material-ui/core/Switch';


class Forms extends Component {

  
 
 state={
        colour:"",
        label:"",
        border: 0,
        check:false,
        load:false ,
    
    }
       


    handle =(event)=>{
        console.log(event.target.value)
      this.setState({
          [event.target.name]:event.target.value
      });
    };  
   

    getValue = (event) => {
            
         
            if(this.state.check===false)
            {   
              this.setState({
                  [event.target.name]:true,
                
              });
            }
            else
                {
                 this.setState({
                    [event.target.name]:false,
                    
                 });  
                 
                 }     
                    
                
                };

       loadValue=(event)=>{

        if(this.state.check===false)
        {
           if(this.state.load===false)
           {
               this.setState({
                   [event.target.name]:true,
                 

               });
               this.condition=1;
            }
            else
               {
                   this.setState({
                       [event.target.name]:false,
                   });
                   this.condition=0;
               }

            }
            
            else if(this.state.check===true)
            {
                if(this.state.load===true)
                {
                    this.setState({
                        [event.target.name]:false,
                    });
                    this.condition=0;
                }
                else if(this.state.load===false)
                {
                    this.setState({
                        [event.target.name]:true
                    })
                    this.condition=1;
                }
            }
           };
                

      
                
      
    
 
render(){

    
        return (
        <div className="body">
            <div className="container">

                <div className="lbn">
                <label>input</label>
                <input type="text" name="colour"value={this.state.colour} onChange={this.handle}></input></div>

                <div className="lbn">
                <label>label</label>
                <input type="text"  name="label"value={this.state.label} onChange={this.handle}></input></div>

                <div className="lbn">
                <label>border radius</label>
                <input type="number"  name="border"value={this.state.border} onChange={this.handle}></input></div>
                
        
                  
                <div className="lbn">
                <Switch 
                color="primary"
                size ="large"
                checked={this.state.check}
                name="check"
                onChange={this.getValue}/>
                </div>
                <div className="lbn">
                <Switch     
                color="primary"
                size ="large"
                checked={this.state.load}
                name="load"  
                onChange={this.loadValue}/>
                </div>
            </div>
            <div class="side">
            <button disabled={ this.condition===1 ? this.state.load : this.state.check} style={{ borderRadius: `${this.state.border}px`, backgroundColor: this.state.colour}}>{this.state.label}</button>
            </div>
       
        </div>
        );
    }
};  



export default Forms