import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {
                id: 'Job1', title: 'developer', salary: '500'
            },
            {
                id: 'Job2', title: 'tester', salary: '400'
            },
            {
                id: 'Job3', title: 'business analyst', salary: '600'
            },
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;