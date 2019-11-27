import React from 'react'
import Axios from 'axios'

export default class NewStudentForm extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label> First Name:
                    <input type = 'text' name='FirstName' onChange= {props.onChange}/>

                <label>
                    <input type = 'text' name='LastName'/>
                </label>

                <label>
                    <input type = 'text' name='Email'/>
                </label>
                    <button type = 'submit'> Submit</button>
                </label>
            </form>
        )
    }
   
}