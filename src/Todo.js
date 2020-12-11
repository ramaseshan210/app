import React, { Component } from 'react'


 class Todo extends Component {
 x=1;



    render() {
        return (
            <div>
               
               <h1>  {this.props.myStringOne} </h1>
               <h1>{this.x}</h1>               
            </div>
        )
    }
}

export default Todo;