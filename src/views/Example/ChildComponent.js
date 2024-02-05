import React from 'react';

// 2 components: class component / function component (func, arrow func)
//JSX: thay vi tra ve 1 bien thi no tra ve 1 dong html (code html trong file js)
//JSX giup viet js trong the html (sd {})
//JSX: return 1 Block
//Fragment: <> </> 

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>check data:', this.state)
    }

    render() {
        // console.log('>>>check props:', this.props);
        // return (
        //     <>
        //         <div>Child component: {this.props.name}</div>
        //     </>
        // )

        //Object destructuring
        console.log('>>>check props:', this.props)

        let { name, age, address, arrayJobs } = this.props; //name, age la ten 9 xac 2 thuoc tinh cua props
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
}

export default ChildComponent;