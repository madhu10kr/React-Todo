import React, { Component } from 'react';

class TodoForm extends Component {
    state={
        content:" "
    }
    handleChange =(e) =>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.todoInsert(this.state)
        this.setState({
            content:""
        })
    }
    render() {
        return ( 
            <div className="frm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add Your Todo" value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
            );
        }
    }


export default TodoForm;