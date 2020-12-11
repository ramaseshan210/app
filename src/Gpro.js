import React, { Component } from 'react'

class Gpro extends Component {

    
    state={
        buton:""
    }

    handleChange = () => {

       console.log("")

    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.handleChange}></input>
                <h1>{this.state.buton}</h1>
            </form>
        )
    }
}
export default Gpro;