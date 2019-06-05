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
            openModal: false,
            addBtn: false
        }
    }

    async componentDidMount() {
        const resp = await axios.get(`${url}/exercises`)
        let exercises = resp.data
        console.log(exercises)
        this.setState({ exercises: exercises })
    }

    toogleModal(e) {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                openModal: !prevState.openModal
            }
        })
    }

    // showForm = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.getAttribute('button-key'))
    //     console.log('clicked')
    //     this.setState({addBtn: true});
    // }

    render() {
        const { exercises, openModal, addBtn } = this.state
        // const checkBtn = addBtn ? <h1>Form</h1> : null

        const showExercises = exercises.map((exercise, i) => {
          return <div key={i}>
               <div className="exercise-row">
                    <div className="exercise-images">
                        <img src={exercise.start_image} />
                        <img src={exercise.end_image} />
                    </div>
                    <div className="exercise-info">
                        <h1><span>Exercise:</span> {exercise.name}</h1>
                        <h3><span>Plane of Motion:</span> {exercise.plane_of_motion}</h3>
                        <h3><span>Joint Action:</span> {exercise.joint_action}</h3>
                        <h3><span>Muscles Involved:</span> {exercise.muscles_involved}</h3>
                        <h3><span>Type of Exercise:</span> {exercise.type_of_exercise}</h3>
                        {/* { checkBtn}
                        <button button-key={i} onClick={this.showForm}>ADD TO ROUTINE</button> */}
                    </div>
                </div>
          </div>
        })

        return (
            <div className="App">
                <Navbar />
                {showExercises}
            </div> 
        );
    }
}

export default Exercises