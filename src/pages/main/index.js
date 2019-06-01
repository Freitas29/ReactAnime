import React, { Component } from 'react';

import api from '../../services/api'

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
        return(
            <div className="anime-list">
               {this.state.animes.map(anime => (
                   <h2 key={anime.id}>{anime.title}</h2>
               ))} 
            </div>
        )
    }
}