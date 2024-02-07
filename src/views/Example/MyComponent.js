import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

// 2 components: class component / function component (func, arrow func)
//JSX: thay vi tra ve 1 bien thi no tra ve 1 dong html (code html trong file js)
//JSX giup viet js trong the html (sd {})
//JSX: return 1 Block
//Fragment: <> </> 

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('>>>check new job:', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currJob = this.state.arrJobs;
        currJob = currJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currJob
        })
    }

    //sau nay dung goi api/route from backend
    componentDidMount() {
        console.log('********run did mount');
    }

    //sau nay khi goi api, khi can so sanh data current vs future
    //dung khi thao tac giua con vs cha (khi cha thay doi thi update con -> dung ham nay)
    componentDidUpdate(preProps, preState) {
        console.log('***preState: ', preState, ' currState:', this.state)
    }

    render() {
        console.log('>>>check state:', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrayJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )

    }
}

export default MyComponent;