import React, { Component } from 'react'
import { CarCardBorder } from '../../components/card'
import Container  from 'react-bootstrap/Container'
import Button from '../../components/button'
import Col  from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import api from '../../services/api'
import './index.css'
import { CardBorder } from '../../components/card/card';
export default class extends Component{
    state = {
        animes: [],
    };

    async componentDidMount() {
        const response = await api.get(`http://localhost:3001/api/v1/animes`,{
            headers: {authorization: "Bearer "+localStorage.getItem('current_user') }
        })
        this.setState({animes: response.data})
        console.log(response.data)
    }
    
    formatDate = (date) =>{
        let d = new Date();
        return d.toLocaleDateString("pt-BR",date);
    }
    render() {

        const animesList = this.state.animes.map( anime => 
            // <Col md={4}>
            //     <Card large>
            //         <label>{this.formatDate(anime.createdAt)}</label>
            //         <div className="image-card">
            //             <img className="img-fluid" src={anime.file.url} />
            //         </div>
            //             <h4>
            //                 {anime.title}
            //             </h4>

            //             <p>{anime.description}</p>
            //         <Button size="60%">Ver detalhes</Button>
            //</Card>        
            //</Col>    
                    <Col md={4}>
                        <CardBorder>
                            <div className="imgBox">
                                <img src={anime.file.url}/>
                            </div>
                            <div className="content">
                                <h2>
                                    {anime.title}
                                </h2>
                                <p>
                                    {anime.description}
                                </p>

                                <Button dark>Ver mais</Button>
                                
                            </div>

                        </CardBorder>
                    </Col>
              
        )

        return (
            <Container fluid>
                <Row>
                    {animesList}
                </Row>

                <Row>
                    
                </Row>
        </Container>
        )
    }
}