import React from 'react';

// 2 components: class component / function component (func, arrow func)
//JSX: thay vi tra ve 1 bien thi no tra ve 1 dong html (code html trong file js)
//JSX giup viet js trong the html (sd {})
//JSX: return 1 Block
//Fragment: <> </> 

class MyComponent extends React.Component {

    state = {
        name: 'Tri1',
        age: 20
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        let name = "Tri";

        return (
            <>
                <div className='first'>
                    {console.log('My name is :', name)}
                    <input value={this.state.name} type='text' onChange={(event) => { this.handleOnChangeName(event) }}></input>
                    Hello components, my name is {this.state.name}
                </div>
                <div className='second'>
                    My age: {this.state.age}
                </div>
            </>
        )

    }
}

export default MyComponent;