import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const url = 'http://localhost:3000'
class Routine extends React.Component {
    constructor() {
        super()

        this.state = {
            routines: [],
            modalPop: false
        }
    this.revealModal = this.revealModal.bind(this)
    }

    revealModal() {
        this.setState({
            modalPop: true
        })
        console.log("clicked")
    }

    async componentDidMount() {
        const resp = await axios.get(`${url}/routines`)
        let routines = resp.data
        console.log(routines)
        this.setState({ routines: routines })
    }

    render() {
        const { routines } = this.state
        const showRoutines = routines.map((routine, i) => {
            return <h1 key={i}>{routine.name}</h1>
        })
        return (
            <div className="App">
                <Navbar />
                <button onClick={this.revealModal}>Add Exercise</button>
                {showRoutines}

            </div>
        );
    }
}

export default Routine