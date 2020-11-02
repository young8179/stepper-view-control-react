import React, { Component } from 'react'

export default class stepper extends Component {
    constructor(){
        super()
        this.state={
            number: 0
        }
    }
    handleChange = (event) => {
        if(isNaN(event.target.value)){
            alert("put a number")
        }else{
            this.setState({number: event.target.value})

        }
    }
    // handleSubmit = (event)=>{
    //     event.preventDefault()
    //     if(event.target.name === "plus"){
    //         this.setState({
    //             number: this.state.number + 1
    //         })
    //     }else{
    //         this.setState({
    //             number: this.state.number - 1
    //         })
    //     }
    // }
    plus= () =>{
        this.setState({
            number: Number(this.state.number) + 1
        })
    }

    minus=()=>{
        this.setState({
            number: Number(this.state.number) - 1
        })
    }

 

    render() {
        return (
            <div className="container ">
                <div className="row justify-content-center mt-5">
                    <form action="" >
                        <button type="button" onClick={this.minus}name="minus">-</button>
                        <input 
                        type="text" 
                        name="number" 
                        onChange={this.handleChange}
                        value={this.state.number}/>
                        <button type="button" onClick={this.plus} name="plus">+</button>
                    </form>

                </div>
            </div>
        )
    }
}
