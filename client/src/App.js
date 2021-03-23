import axios from 'axios';
import { Component } from 'react'
import TodoForm from './components/todos/TodoForm';
class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // make a call to our rails end to get all todos
    // set the todos on to state

  }
  addTodo = (todo) => {
  //make a api call to add in our rails server and our database
  // add the new todo to the front end
    axios.post('/api/todos', { todo })
      .then( res => {
        // add new todo
        const {todos} = this.state
        this.setState({ todos: [...todos, res.data]})
      })
      .catch( err => console.log(err))

  }

  updateTodo = (id, updatedTodo) => {
  // update in our back end and the db with the api call
  // update the todo in the front end
  }
  deleteTodo = (id) => {
//make api call to delete in the back end and the db
// delete the todo in the frontend
    
  }
  render () {
    return (
      <>
        <h1>To Do List</h1>
        <TodoForm add Todo={this.addTodo}/>
      </>
    )
  }
}


export default App;
