import React from 'react';
import { Button, Modal, Form, Grid, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import './Routine.css'

class WorkloadForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { updateWorkload, handleChanges } = this.props
        return (
            <div className="App">
             <div className ="button-modal">
                    <Modal trigger={<Button color="blue" size="huge" id ="add-button">
                        <Icon id="edit-icon" disabled name='write'/>
                        </Button>}>
                        <h1 className="modal-style">"Update Your Workout Routine"</h1>
                        <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                            <Form onSubmit={updateWorkload}>
                                <Form.Field>
                                    <label>Exercise</label>
                                    <input onChange={handleChanges} type="text" placeholder='Enter Name of Exercise' />
                                </Form.Field>

                                <Form.Field required>
                                    <label>Weights</label>
                                    <input onChange={handleChanges} type="number" name="weight" placeholder='Enter Weight lifted'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Sets</label>
                                    <input onChange={handleChanges} type="number" name='sets' placeholder='Enter Number of Sets' />
                                </Form.Field>

                                <Form.Field required>
                                    <label>Repetition</label>
                                    <input onChange={handleChanges} type="number" name="reps" placeholder='Enter Number of Reps'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Rate of Percieved Exertion</label>
                                    <input onChange={handleChanges} type="number" name="rpe" placeholder='From 1-10 Difficulty'/>
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

export default WorkloadForm