import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Exercises.css'

const url = 'http://localhost:3000'
class Exercises extends React.Component {
    constructor() {
        super()

        this.state = {
            exercises: [],
            changeText: false
        }
        // this.addWorkload = this.addWorkload.bind(this)
    }

    async componentDidMount() {
        const resp = await axios.get(`${url}/exercises`)
        let exercises = resp.data
        this.setState({ exercises: exercises })
    }

    // async addWorkload() {
    //     this.setState({ changeText: true })
    // }

    render() {
        const { exercises, changeText } = this.state

        // let test = !changeText ? console.log("nothing") : <h1>YERRRR</h1>

        const showExercises = exercises.map((exercise, i) => {
          return <div key={i}>
               <div className="exercise-row">
                    <div className="exercise-images">
                        <img src={exercise.start_image} alt='exercise-start'/>
                        <img src={exercise.end_image} alt='exercise-end'/>
                    </div>
                    <div className="exercise-info">
                        <h1>{exercise.name}</h1>
                        <h3><span>Plane of Motion:</span> {exercise.plane_of_motion}</h3>
                        <h3><span>Joint Action:</span> {exercise.joint_action}</h3>
                        <h3><span>Muscles Involved:</span> {exercise.muscles_involved}</h3>
                        <h3><span>Type of Exercise:</span> {exercise.type_of_exercise}</h3>
                        {/* <button onClick={this.addWorkload}>Click Me</button> */}
                    </div>
                </div>
          </div>
        })

        return (
            <div className="App">
                <h1 id="exercise-header">Kinesiology of Exercises</h1>
                <Navbar />
                {/* {test} */}
                {showExercises}
            </div> 
        );
    }
}

export default Exercises