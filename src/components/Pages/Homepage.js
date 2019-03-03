import React, { Component } from 'react'
import Navbar from '../elements/Navbar'
import Welcome from '../elements/Welcome'

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Welcome />
            </div>
            
        )
    }
}

export default Homepage
