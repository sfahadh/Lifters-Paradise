import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Routine.css'
import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'
import { Icon } from 'semantic-ui-react'


const url = 'http://localhost:3000'
class Routine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            workloads: [],
            exercise: 'Bench Press',
            workload: 
            {
                weight: 0,
                sets: 0,
                reps: 0,
                rpe: 0,
                exercise_id: 1,
                routine_id: 1
            },
            isThereWorkload: true
        }
    this.handleChanges = this.handleChanges.bind(this)
    this.handleExercise = this.handleExercise.bind(this)
    this.createWorkload = this.createWorkload.bind(this)
    this.updateWorkload = this.updateWorkload.bind(this)
    this.deleteWorkload = this.deleteWorkload.bind(this)
    }

    componentDidMount() {
        this.renderWorkload()
    }

    async renderWorkload() {
        const resp = await axios.get(`${url}/workloads`)
        let workloads = resp.data
        this.setState({ workloads: workloads })
    }

    async createWorkload() {
        const { workload } = this.state
        await axios.post(`${url}/workloads`, workload)
        this.renderWorkload() 
    }

    async updateWorkload(id) {
        const { workload } = this.state
        const res = await axios.put(`${url}/workloads/${id}`, workload)
        console.log(res)
        this.renderWorkload() 
    }

    async deleteWorkload(id) {
        await axios.delete(`${url}/workloads/${id}`)
        this.renderWorkload()
    }

    async handleChanges(e) {
        const name = e.target.name
        const value = e.target.value
        await this.setState({
            workload: {
                ...this.state.workload,
                [name]: value
            }
        })
    }

    async handleExercise(e) {
        console.log(e.target.value)
        await this.setState({ exercise: e.target.value })
    }

    async showMessage() {
        this.setState({
            isThereWorkload: false
        })
    }

    render() {
        const { workloads, exercise } = this.state
        let message = workloads.length === 0 ? 
        <div id="workload-message"></div> : null
        return (
            <div className="App">
                <Navbar />
                <h1>My Workout Routine</h1>
                <div id="whole-table">
                    <div className="column-load table-headers">
                        <div className="section exercises">Exercises</div>
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                        <div className="section delete">Delete</div>
                        <div className="section update">Update</div>
                    </div>

                    <div>
                        {workloads.map(workload =>                              
                            <div key={workload.id} className="table-headers workload-header">
                                <div className="section weight workload-exercise">{exercise}</div>
                                <div className="section weight workload-weight">{workload.weight}</div>
                                <div className="section set workload-set">{workload.sets}</div>
                                <div className="section rep workload-rep">{workload.reps}</div>
                                <div className="section rpe workload-rpe">{workload.rpe}</div>
                                <button id="delete-button"onClick={() => this.deleteWorkload(workload.id)}>
                                    <Icon id="trash-icon" disabled name='trash alternate'/>
                                </button>
                                <UpdateForm 
                                    handleChanges={ this.handleChanges } 
                                    handleExercise={ this.handleExercise } 
                                    updateWorkload={() => this.updateWorkload(workload.id)}
                                />
                            </div>)}
                    </div>
                </div>
                <CreateForm 
                    handleChanges={ this.handleChanges } 
                    handleExercise={ this.handleExercise } 
                    createWorkload={ this.createWorkload }
                />
                {message}
            </div>
        );
    }
}

export default Routine