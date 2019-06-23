import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Form} from '../../components/form'
import {Card} from '../../components/card'
import Button from '../../components/button'
import {Input, TextArea} from '../../components/input'
import Axios from 'axios';

export default class AnimeNew extends Component{

    state = {
        title: '',
        littleDescription: '',
        description: '',
        image: null,
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handleLittleDescription = (e) => {
        this.setState({littleDescription: e.target.value})
    }

    previewImage(e){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var reader = new FileReader();
    
            reader.onload = (photo) => {
                document.querySelector('.imgCard img').src = photo.target.result;
            }
            
            this.setState({image: e.currentTarget.files[0]})
            reader.readAsDataURL(e.currentTarget.files[0]);
    
        }
    }


    formatDate = () =>{
        let d = new Date();
        let month = d.getMonth()+1;

        return d.getDate()+"/"+month+"/"+d.getFullYear()
    }


    handleSave = (e) => {
        e.preventDefault()
        const formData= new FormData()
        formData.append('myImage',this.state.image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        Axios.post("anime/new",formData,config)
        .then((response) => {
            console.log('Sucesso',response)
        }).catch((error) => {
            console.error("erro ", error)
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                        <Form default>
                            <Col md={6}>
                                <div id="secondPart">
                                    
                                    <Input placeholder="Titulo" onChange={e => this.handleTitle(e)}></Input>
                                    <Input placeholder="Descrição breve" onChange={e => this.handleLittleDescription(e)}></Input>
                                    <TextArea placeholder="Descrição" onChange={e => this.handleDescription(e)}>
                                    
                                    </TextArea>
                                    
                                    <label id="forFile" for='file'>Selecionar um arquivo</label>
                                    <input id='file' type='file' onChange={e => this.previewImage(e)}></input>
                                    
                                    <Button warning size="50%">Salvar</Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p>
                                    Isso é como vai ficar seu post
                                </p>
                                
                                <Card large>
                                    <label>{this.formatDate()}</label>
                                    <Col md={12}>
                                    <div className="imgCard" style={{position: 'relative'}}>
                                        <img className="img-fluid" style={{ position:'relative', widhth: '20%'}}/>
                                    </div>
                                    </Col>
                                        <h4>
                                            {this.state.title}
                                        </h4>

                                        <p>{this.state.littleDescription}</p>
                                </Card>    
                            
                            </Col>
                        </Form>
                </Row>
            </Container>
        )
    }
}