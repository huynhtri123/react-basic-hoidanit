import React from 'react';

//Function component
const ChildComponent = (props) => {
    let { arrayJobs } = props;
    return (
        <div className='job-lists'>
            {
                arrayJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChildComponent;