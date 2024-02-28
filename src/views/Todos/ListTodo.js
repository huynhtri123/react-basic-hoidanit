import React from "react";
import './ListTodos.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodos extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Watching TV' },
            { id: 'todo3', title: 'Playing game' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Added!");
    }

    handleDeleteTodo = (todo) => {
        let currTodos = this.state.listTodos;
        currTodos = currTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currTodos
        })
        toast.success('Delele succeed!')
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtyObject = Object.keys(editTodo).length === 0;

        //trang thai "Save"
        if (isEmtyObject === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            //Update 
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {} //set ve empty cho no quay lai trang thai "Edit"
            })

            toast.success('Update successfully!');

            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {

        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos;
        let isEmtyObject = Object.keys(editTodo).length === 0;
        console.log('>>>check empty object:', isEmtyObject);

        return (
            <div className="list-todo-container">

                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="toto-child" key={item.id}>
                                    {isEmtyObject === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} -
                                                    <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEdit(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}

                                    >
                                        {isEmtyObject === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>

                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}

                                    >Delete</button>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        )
    }
}

export default ListTodos;