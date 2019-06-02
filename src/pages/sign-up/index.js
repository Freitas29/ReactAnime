import React,{Component} from 'react'
import Form from '../../components/form'

export default class SignUp extends Component{
    render(){
        return(
            <Form
            buttonName="Registrar-se"
            action="/register"
            />
        )
    }
}