import React from 'react';
import { Button, Modal, Form, Grid, Segment } from 'semantic-ui-react'

class WorkloadForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    render(props) {
  
        return (
            <div className="App">
             <div className ="button-modal">
                    <Modal trigger={<Button color="blue" size="huge" className ="add-button">Add Workload</Button>}>
                        <h1 className="modal-style">Add To Your Exercise Routine</h1>
                        <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                            <Form >
                                <Form.Field required>
                                    <label>Sets</label>
                                    <input onChange={props.handleChanges} type="number" name='sets' placeholder='Enter Number of Sets' />
                                </Form.Field>

                                <Form.Field required>
                                    <label>Repetition</label>
                                    <input onChange={props.handleChanges} type="number" name="reps" placeholder='Enter Number of Reps'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Weights</label>
                                    <input onChange={props.handleChanges} type="number" name="weights" placeholder='Enter Weight lifted'/>
                                </Form.Field>

                                <Form.Field required>
                                    <label>Rate of Percieved Exertion</label>
                                    <input onChange={props.handleChanges} type="number" name="rpe" placeholder='From 1-10 Difficulty'/>
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

export default WorkLoadForm