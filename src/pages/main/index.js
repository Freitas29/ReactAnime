import React, { Component } from 'react';
import "./styles.css"
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default class Main extends Component{
   
    state = {
        animes: [],
    }

    componentDidMount() {
        this.loadAnimes();
    }
    
    loadAnimes = async () => {
        const response = await api.get('http://localhost:3001/api/v1/animes');
        this.setState({ animes: response.data })
        console.log(response.data)
    };
   
    render(){
        const { animes } = this.state;
       
        return(
            <div className="anime-list">
               {animes.map(anime => (
                   <card key={anime.id}>
                       <strong>{anime.title}</strong>
                       <p>{anime.description}</p>

                       <Link to={`/animes/${anime.id}`}>Mais detalhes</Link>
                   </card>
               ))} 
            </div>
        )
    }
}