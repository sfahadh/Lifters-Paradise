import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Routine.css'
import { Button, Modal, Form, Grid, Segment } from 'semantic-ui-react'

const url = 'http://localhost:3000'
class Routine extends React.Component {
    constructor() {
        super()

        this.state = {
            routines: [],
            isLoaded: false,
            workloads: []
        }
    this.handleChanges = this.handleChanges.bind(this)
    this.RenderWorkload = this.RenderWorkload.bind(this)
    this.getAllRoutines = this.getAllRoutines.bind(this)
    this.renderWorkload = this.renderWorkload.bind(this)
    }

    componentDidMount() {
        this.getAllRoutines()
        this.renderWorkload()
    }

    async renderWorkload() {
        const resp = await axios.get(`${url}/routines`)
        let routines = resp.data
        console.log(routines)
        for(let i = 0; i < routines.length; i++) {
          const res = await axios.get(`${url}/routines/${routines[i].id}/workloads`)
          const workloads = res.data
          console.log(workloads)
          routines[i].workloads = workloads
        }
        // this.setState({ workloads: workloads })
      }

    async getAllRoutines() {
        try {
            const resp = await axios.get(`${url}/routines`)
            let routines = resp.data
            this.setState({ 
                routines: routines,
                isLoaded: true
            })
        } catch (err) {
            console.log('Fetch Error:',err.message);
        }
    }

    handleChanges(e) {
        const element = e.target
        const name = element.name
        const value = element.value
        this.setState({[name]: value})
    }

    RenderWorkload() {
        console.log('clicked')
    }

    render() {
        const { routines, isLoaded } = this.state
        const showRoutines = isLoaded ? routines.map((routine, i) => {
            return <h1 key={i}>{routine.name}</h1>
        }) : <h1>Loading...</h1>

        return (
            <div className="App">
                <Navbar />
                {showRoutines}
                
                <div id="whole-table">
                    <div className="column-load table-headers">
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                    </div>
                </div>

                <div className ="button-modal">
                    <Modal trigger={<Button color="blue" size="huge" className ="add-button">Add Workload</Button>}>
                        <h1 className="modal-style">Add To Your Exercise Routine</h1>
                        <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                            <Form onSubmit={this.RenderWorkload}>
                                <Form.Field required>
                                    <label>Sets</label>
                                    <input onChange={this.handleChanges} type="number" name='sets' placeholder='Enter Number of Sets' />
                                </Form.Field>

                                <Form.Field required>
                                    <label>Repetition</label>
                                    <input onChange={this.handleChanges} type="number" name="reps" placeholder='Enter Number of Reps'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Weights</label>
                                    <input onChange={this.handleChanges} type="number" name="weights" placeholder='Enter Weight lifted'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Rate of Percieved Exertion</label>
                                    <input onChange={this.handleChanges} type="number" name="rpe" placeholder='From 1-10 Difficulty'/>
                                </Form.Field>

                                <Button inverted color="blue" type='submit'>Submit</Button>
                            </Form>
                            </Grid.Column>
                        </Grid>
                        </Segment>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Routine