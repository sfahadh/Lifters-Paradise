import React from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const url = 'http://localhost:3000'
class Exercises extends React.Component {
    constructor() {
        super()

        this.state = {
            exercises: []
        }
    }

    async componentDidMount() {
        const resp = await axios.get(`${url}/exercises`)
        let exercises = resp.data
        console.log(exercises)
        this.setState({ exercises: exercises })
    }

    render() {
        const { exercises } = this.state
        const showExercises = exercises.map((exercise, i) => {
          return <div key={i}>
            <h1>{exercise.name}</h1>
            <h3>{exercise.plane_of_motion}</h3>
            <h3>{exercise.joint_action}</h3>
            <h3>{exercise.muscles_involved}</h3>
            <h3>{exercise.type_of_exercise}</h3>
          </div>
        })
        return (
            <div className="App">
                <Navbar />
                {showExercises}
                <div className="exercise-row">
                    <div className="exercise-images">
                        <img className="exercise-images" src={require("./Exercise-Images/squat-start.jpg")} alt="squat-start"></img>
                        <img className="exercise-images" src={require("./Exercise-Images/squat-end.jpg")} alt="squat-end"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercises