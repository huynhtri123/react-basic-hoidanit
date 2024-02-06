import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleClickDelete = (job) => {
        console.log('>>>check handleClickDelete:', job);
        this.props.deleteAJob(job);
    }

    render() {
        let { arrayJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrayJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <></> <span onClick={() => this.handleClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>

                }
            </>
        )
    }
}

export default ChildComponent;