import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Routine.css'
import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'
import { Icon } from 'semantic-ui-react'


const url = 'https://lifters-paradise.herokuapp.com'
class Routine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            workloads: [],
            workload: 
            {
                weight: null,
                sets: null,
                reps: null,
                rpe: null,
                lift: null,
                exercise_id: 1,
                routine_id: 1
            },
            isThereWorkload: true
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
        await axios.put(`${url}/workloads/${id}`, workload)
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

    async showMessage() {
        this.setState({
            isThereWorkload: false
        })
    }

    showEntries = () => {
        const { workloads } = this.state
        let array = workloads.map(workload =>                              
            <div key={workload.id} className="table-headers workload-header">
                <div className="section x workload-exercise"><span>{workload.lift}</span></div>
                <div className="section x"><span>{workload.weight}</span></div>
                <div className="section x"><span>{workload.sets}</span></div>
                <div className="section x"><span>{workload.reps}</span></div>
                <div className="section x"><span>{workload.rpe}</span></div>
                <button id="delete-button"onClick={() => this.deleteWorkload(workload.id)}>
                    <Icon id="trash-icon" disabled name='trash alternate'/>
                </button>
            
                <UpdateForm 
                    handleChanges={ this.handleChanges } 
                    updateWorkload={() => this.updateWorkload(workload.id)}
                />
            </div>)
            return array.sort()
    }

    render() {
        const { workloads } = this.state
        const { handleLogout, currentUser } = this.props
        let message = workloads.length === 0 ? 
        <div id="workload-message">
            <h1>Bruh, do you even lift?</h1>
            <img src={require("./popeye-meme-color.png")} alt=""/>
        </div> : null

        return (
            <div className="routine-background">
                <Navbar handleLogout={handleLogout} currentUser={currentUser} />
                <h1 id="routine-header">My Workout Routine</h1>
                <div id="whole-table">
                    <div className="table-headers column-load">
                        <div className="section exercises">Exercises</div>
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                        <div className="section delete">Delete</div>
                        <div className="section update">Update</div>
                    </div>

                    <div>
                        {this.showEntries()}
                    </div>
                </div>
                <CreateForm 
                    handleChanges={ this.handleChanges } 
                    createWorkload={ this.createWorkload }
                />
                {message}
            </div>
        );
    }
}

export default Routine