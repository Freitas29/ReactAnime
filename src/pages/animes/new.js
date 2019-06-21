import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Form} from '../../components/form'
import {Card} from '../../components/card'
import Button from '../../components/button'

export default class AnimeNew extends Component{

    state = {
        title: '',
        description: ''
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }

    previewImage(e){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var reader = new FileReader();
    
            reader.onload = (photo) => {
                document.querySelector('.imgCard img').src = photo.target.result;
            }
    
            reader.readAsDataURL(e.currentTarget.files[0]);
    
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                        <Form default>
                            <Col md={6}>
                                <div id="secondPart">
                                    
                                    <input placeholder="Titulo" onChange={e => this.handleTitle(e)}/>
                                    
                                    <textarea placeholder="Descrição" onChange={e => this.handleDescription(e)}>
                                    </textarea> 
                                    
                                    <label id="forFile" for='file'>Selecionar um arquivo</label>
                                    <input id='file' type='file' onChange={e => this.previewImage(e)}></input>
                                    <Button warning>Salvar</Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <p>
                                    Isso é como vai ficar seu post
                                </p>
                            <Card>
                                <input type="checkbox" />
                                <input className="input-left" type="checkbox" />
                                <div className="toggle-left" onClick={e => alert('Link para detalhes do seu post')}>👁</div>
                                <div className="toggle">+</div>
                                <div className="imgCard">
                                    <img src="#" />
                                </div>
                                <div className="details">
                                    <h2>
                                        {this.state.title}
                                    </h2>

                                    <p>{this.state.description}</p>

                                    
                                </div>
                            </Card>
                            </Col>
                        </Form>
                </Row>
            </Container>
        )
    }
}