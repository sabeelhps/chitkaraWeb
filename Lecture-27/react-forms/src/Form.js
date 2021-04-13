import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();
        this.state = {
            username:''
        }

    }


    nameChangeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({ username: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.username);
       
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                
                <input
                    type="text"
                    onChange={this.nameChangeHandler}
                    placeholder="username"
                />

                <button>Submit!</button>

            </form>
        )
    }
}

export default Form;
