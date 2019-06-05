import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { Button, Modal, Form, Grid, Segment } from 'semantic-ui-react'

const url = 'http://localhost:3000'
class Routine extends React.Component {
    constructor() {
        super()

        this.state = {
            routines: [],
        }
    }

    async componentDidMount() {
        const resp = await axios.get(`${url}/routines`)
        let routines = resp.data
        this.setState({ routines: routines })
    }

    handleChanges = (event) => {
        const element = event.target
        const name = element.name
        const value = element.value
        this.setState({[name]: value})
    }

    render() {
        const { routines } = this.state
        const showRoutines = routines.map((routine, i) => {
            return <h1 key={i}>{routine.name}</h1>
        })
        return (
            <div className="App">
                <Navbar />
                {showRoutines}

                <div className ="button-modal">
                <Modal trigger={<Button color="blue" size="huge" className ="add-button">Add Exercise</Button>}>
                    <h1 className="modal-style">Add To Your Exercise Routine</h1>
                    <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                        <Form >
                            <Form.Field required>
                                <label>Exercise Name</label>
                                <input onChange={this.handleChanges} name="exercise" placeholder='Enter Exercise?' />
                            </Form.Field>

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