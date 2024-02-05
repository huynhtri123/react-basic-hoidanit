import React from 'react';

// 2 components: class component / function component (func, arrow func)
//JSX: thay vi tra ve 1 bien thi no tra ve 1 dong html (code html trong file js)
//JSX giup viet js trong the html (sd {})
//JSX: return 1 Block
//Fragment: <> </> 

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {

        let { arrayJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>>check:', check)

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrayJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$
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