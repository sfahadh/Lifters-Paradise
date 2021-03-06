import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            redirect: false
        }
    }

    handleRedirect() {
        this.setState({ redirect: true })
    }

    render() {
        const { handleLogout, currentUser } = this.props
        if(this.state.redirect) { return <Redirect to='routine'/>}
        return (
            <div className="home-background">
                <Navbar handleLogout={handleLogout} currentUser={currentUser}/>
                <div id="home-intro">
                    <h1>Online Exercise Tracker and Programming (Prototype)</h1>
                    <button onClick={this.handleRedirect.bind(this)}>START NOW</button>
                </div>
            </div>
        );
    }
}

export default Home