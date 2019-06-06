import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Routine.css'
import WorkloadForm from './WorkloadForm'

const url = 'http://localhost:3000'
class Routine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            routines: [],
            isLoaded: false,
        }
    this.handleChanges = this.handleChanges.bind(this)
    this.createWorkload = this.createWorkload.bind(this)
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
        
        let { createForm } = this.state
        // for(let i = 0; i < routines.length; i++) {
        //     const res = await axios.post(`${url}/routines/${routines[i].id}/workloads`, { createForm })
        //     console.log(res)
        //     const workloads = res.data
        //     routines[i].workloads = workloads
        // } 
        
        const res = await axios.post(
            `${url}/routines/1/workloads`, 
            { workload: 
                {
                    weight: 0,
                    sets: 0,
                    reps: 0,
                    rpe: 0,
                    exercise_id: 1,
                    routine_id: 1
                } 
            })
        console.log(res.data)
    }

    handleChanges(e) {
        const element = e.target
        const name = element.name
        const value = element.value
        this.setState({[name]: value})
        console.log(value)
    }


    render() {

        return (
            <div className="App">
                <Navbar />
                
                <div id="whole-table">
                    <div className="column-load table-headers">
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                    </div>
                    <div>
                        {this.state.routines && this.state.routines.map((routine, i) => { return ( 
                            <div key={i} className="workload-data">
                                {/* <h1 key={routine.id}>{routine.name}</h1>  */}
                                {routine.workloads.map(workload => 
                                    <div key={workload.id} className="table-headers workload-header">
                                        <div className="section weight workload-weight">{workload.weight}</div>
                                        <div className="section set workload-set">{workload.sets}</div>
                                        <div className="section rep workload-rep">{workload.reps}</div>
                                        <div className="section rpe workload-rpe">{workload.rpe}</div>
                                    </div>)}
                            </div>
                        )})}
                    </div>
                    <button onClick={this.createWorkload}>CREATE</button>
                </div>
                <WorkloadForm 
                    handleChanges={this.handleChanges} 
                    submitWorkload={this.submitWorkload} 
                    createWorkload={this.createWorkload}
                />
            </div>
        );
    }
}

export default Routine