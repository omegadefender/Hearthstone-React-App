import React, { Component } from 'react'
import Navbar from '../elements/Navbar'

class HScards extends Component {
    componentDidMount() {
        fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            headers: {
                "X-RapidAPI-Key": "8c6bccaed2msh6d9ac609b77a10ap1d3a00jsn6751eda7119b"
            } 
        })
        .then(resp => resp.json())
        .then(json => console.log(json))        
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>HS CARDS</h1>
                <h3>This will be where you can search HS cards</h3>
            </div>
        )}
}

export default HScards