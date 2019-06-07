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
            routines: [],
            workload: 
            {
                weight: 0,
                sets: 0,
                reps: 0,
                rpe: 0,
                exercise_id: 1,
                routine_id: 1
            } 
        }
    this.handleChanges = this.handleChanges.bind(this)
    this.createWorkload = this.createWorkload.bind(this)
    this.updateWorkload = this.updateWorkload.bind(this)
    this.deleteWorkload = this.deleteWorkload.bind(this)
    }

    componentDidMount() {
        this.renderWorkload()
    }

    async renderWorkload() {
        const resp = await axios.get(`${url}/routines`)
        let routines = resp.data
        for(let i = 0; i < routines.length; i++) {
            const res = await axios.get(`${url}/routines/${routines[i].id}/workloads`)
            const workloads = res.data
            routines[i].workloads = workloads
        } 
        this.setState({ routines: routines })
    }

    async createWorkload() {
        const { workload } = this.state
        await axios.post(`${url}/routines/1/workloads`, workload)
        this.renderWorkload() 
    }

    async updateWorkload(id) {
        const { workload } = this.state
        const res = await axios.put(`${url}/routines/1/workloads/${id}`, workload)
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

    render() {
        const { routines } = this.state
        return (
            <div className="App">
                <Navbar />
                <h1>My Workout Routine</h1>
                <div id="whole-table">
                    <div className="column-load table-headers">
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                        <div className="section delete">Delete</div>
                        <div className="section update">Update</div>
                    </div>

                    <div>
                        {routines && routines.map((routine, i) => { 
                            return ( 
                            <div key={i} className="workload-data">
                                {routine.workloads.map(workload =>                              
                                    <div key={workload.id} className="table-headers workload-header">
                                        <div className="section weight workload-weight">{workload.weight}</div>
                                        <div className="section set workload-set">{workload.sets}</div>
                                        <div className="section rep workload-rep">{workload.reps}</div>
                                        <div className="section rpe workload-rpe">{workload.rpe}</div>
                                        <button id="delete-button"onClick={() => this.deleteWorkload(workload.id)}>
                                            <Icon id="trash-icon" disabled name='trash alternate'/>
                                        </button>
                                        <UpdateForm handleChanges={this.handleChanges} updateWorkload={()=> this.updateWorkload(workload.id)}/>
                                    </div>)}
                            </div>
                        )})}
                    </div>
                </div>
                <CreateForm handleChanges={this.handleChanges} createWorkload={this.createWorkload}/>
            </div>
        );
    }
}

export default Routine