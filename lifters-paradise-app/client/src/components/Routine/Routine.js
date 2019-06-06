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
            isLoaded: false
        }
    this.handleChanges = this.handleChanges.bind(this)
    // this.getAllRoutines = this.getAllRoutines.bind(this)
    this.submitWorkload = this.submitWorkload.bind(this)
    }

    componentDidMount() {
        // this.setState({ 
            // routines: await 
            this.renderWorkload()
        // })
    }

    submitWorkload() {
        console.log("clicked")
    }

    async renderWorkload() {
        const resp = await axios.get(`${url}/routines`)
        let routines = resp.data
        for(let i = 0; i < routines.length; i++) {
            const res = await axios.get(`${url}/routines/${routines[i].id}/workloads`)
            const workloads = res.data
            routines[i].workloads = workloads
        } 
        // return routines;
        this.setState({ routines: routines })
    }


    handleChanges(e) {
        const element = e.target
        const name = element.name
        const value = element.value
        this.setState({[name]: value})
        console.log(value)
    }


    render() {
        // console.log(this.state.routines,'my routine state')
        const { routines, isLoaded, rendered } = this.state
        // console.log(routines)
        // if(rendered) {
        //     const showRoutines = isLoaded ? routines.map((routine, i) => {
        //         return <h1 key={i}>{routine[i].workloads}</h1>
        //     }) : <h1>Loading...</h1>
        // } else {
        //     console.log("did it work?")
        // }

        // let show = renderWorkload ? (
        //     <div className="modal-form">
        //         <form>
        //             <h3>Sets</h3>
        //             <input/>
        //             <h3>Reps</h3>
        //             <input/>
        //             <h3>Weight</h3>
        //             <input/>
        //             <h3>RPE</h3>
        //             <input/>
        //         </form>
        //     </div>
        // ) : null


        return (
            <div className="App">
                <Navbar />
                {/* {showRoutines} */}
                
                <div id="whole-table">
                    <div className="column-load table-headers">
                        <div className="section weight">Weights</div>
                        <div className="section set">Sets</div>
                        <div className="section rep">Repetitions</div>
                        <div className="section rpe">RPE</div>
                    </div>
                    <div>
                    {this.state.routines && this.state.routines.map((routine, i) => { return ( 
                        <div key={i}>
                            {/* <h1 key={routine.id}>{routine.name}</h1>  */}
                            {routine.workloads.map(workload => 
                                <ul key={workload.id}>
                                    <li>{workload.weight}</li>
                                    <li>{workload.sets}</li>
                                    <li>{workload.reps}</li>
                                    <li>{workload.rpe}</li>
                                </ul>)}
                        </div>)})
                    }
                    </div>
                </div>
                <WorkloadForm handleChanges={this.handleChanges} submitWorkload={this.submitWorkload} />
            </div>
        );
    }
}

export default Routine