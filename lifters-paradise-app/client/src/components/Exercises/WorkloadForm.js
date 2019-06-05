import React from 'react';

class WorkloadForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    render() {
  
        return (
            <div className="App">
                <div className="modal-form">
                    <form onClick={props.openModal}>
                        <h3>Sets</h3>
                        <input/>
                        <h3>Reps</h3>
                        <input/>
                        <h3>Weight</h3>
                        <input/>
                        <h3>RPE</h3>
                        <input/>
                    </form>
                </div>
            </div>
        );
    }
}

export default WorkLoadForm