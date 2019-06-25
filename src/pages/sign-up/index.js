import React,{Component} from 'react'
import {Form} from '../../components/form/index'
import api from '../../services/api'
import  Col  from 'react-bootstrap/Col'
import  Row  from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Alert } from '../../components/alert'
import { Input } from '../../components/input'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser} from '@fortawesome/free-regular-svg-icons'
import Button from '../../components/button/'

export default class SignUp extends Component{

    state = {
        password: "",
        email: "",
        name: "",
        error: false,
    }

    

    handlePassword = (e) =>{
        this.setState({password: e.target.value})
        if(e.target.value.length <= 0){
            alert("Não pode ficar em branco")
        }
    }

    handleEmail = (e) =>{
        this.setState({email: e.target.value})
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }


    handleRegister = async (e) => {
        e.preventDefault();
        await api.post('http://localhost:3001/api/v1/registrations', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then((response) => {
            if(response.data.error){
                this.setState({ error: response.data.error})
            }else{
                console.log("Resposta",response)
                this.props.history.push("/animes")
                localStorage.setItem("current_user",response.data.token)
            }
        }).catch((response) => {
            console.log(response)
        })
    }
    

    handleAlert = () => {
        if(this.state.error){    
            return(
                <Alert warning >
                    { this.state.error }
                </Alert>
            )
        }
    }
    
    render(){
        return(
            <Container fluid className="d-flex align-itens-center justify-content-center">
                <Row>
                    <Col md={12}>
                        <div className="box">
                        <Form>
                        <img src="https://image.flaticon.com/icons/svg/145/145859.svg" className="imageBox"/>

                            <div className="inputBox">
                                <Input dark placeholder="example@email.com" onChange={e => this.handleEmail(e)}/>
                                
                            </div>

                            <div className="inputBox">
                                <Input dark placeholder="Ereeenn" onChange={e => this.handleName(e)}/>
                                
                            </div>

                            <div className="inputBox">
                                <Input dark type="password" placeholder="*******" onChange={e => this.handlePassword(e)}/>
                                
                            </div>

                            <Button primary onClick={e => this.handleRegister(e)}>Cadastrar</Button>
                        </Form>  
                        </div>                      
                    </Col>
                </Row>
            </Container>
        )
    }
}