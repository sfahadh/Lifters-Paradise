import React from 'react';
import { Button, Modal, Form, Grid, Segment } from 'semantic-ui-react'
import './Routine.css'

const WorkloadForm = ({ createWorkload, handleChanges }) => {
    return (
        <div className="App">
            <div className ="button-modal">
                <Modal id="modal-routine" trigger={<Button color="blue" size="huge" id="create-button">Add Workload</Button>}>
                    <h1 className="modal-style">Add to Your Workout Routine</h1>
                    <Segment id="modal-segment">
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                        <Form onSubmit={createWorkload}>
                            <Form.Field className="form-field">
                                <label>Exercise</label>
                                <input onChange={handleChanges} type="text" name="lift" placeholder='Enter Name of Exercise' />
                            </Form.Field>

                            <Form.Field required className="form-field">
                                <label>Weights</label>
                                <input onChange={handleChanges} type="number" name="weight" placeholder='Enter Weight lifted'/>
                            </Form.Field>

                            <Form.Field required className="form-field">
                                <label>Sets</label>
                                <input onChange={handleChanges} type="number" name='sets' placeholder='Enter Number of Sets' />
                            </Form.Field>

                            <Form.Field required className="form-field">
                                <label>Repetition</label>
                                <input onChange={handleChanges} type="number" name="reps" placeholder='Enter Number of Reps'/>
                            </Form.Field>

                            <Form.Field required className="form-field">
                                <label>Rate of Percieved Exertion</label>
                                <input onChange={handleChanges} type="number" name="rpe" placeholder='From 1-10 Difficulty'/>
                            </Form.Field>
                            <Button id="modal-submit" inverted color="blue" type='submit'>Submit</Button>
                        </Form>
                        </Grid.Column>
                    </Grid>
                    </Segment>
                </Modal>
            </div>
        </div>
    );
}

export default WorkloadForm