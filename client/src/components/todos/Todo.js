import { Component } from 'react'
class Todo extends Component {
  render() {
    const { id, title, complete, deleteTodo } = this.props
    return(
      <>
        <h1>Title: {title}</h1>
        <p>
          { 
            complete ?
            "completed" :
            "active"
          }
        </p>
        <button>Edit</button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </>
    )
  }
}
export default Todo;