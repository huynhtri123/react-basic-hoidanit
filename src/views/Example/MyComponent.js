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

    render() {
        console.log('>>>check state:', this.state);
        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrayJobs={this.state.arrJobs}
                />
            </>
        )

    }
}

export default MyComponent;