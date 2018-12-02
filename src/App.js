import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm'

class App extends Component {
  state={
    todo:[
      {id:"1",content:"buy a book"},
      {id:"2",content:"buy a food for evening"},
    ]
  }
  deleteTodo=(id)=>{
  const todo = this.state.todo.filter(dlt=>{
    return dlt.id !== id
  })
  this.setState({
    todo
  })
  }

  todoInsert = (TodoInput) =>{
    const todo = [...this.state.todo, TodoInput]
    this.setState({
      todo:todo
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Todo</h2>
          <Todo todo={this.state.todo} deleteTodo={this.deleteTodo}/>
          <TodoForm todoInsert={this.todoInsert} />
        </header>
      </div>
    );
  }
}

export default App;
