import { Component } from 'react';

class TodoForm extends Component {
    state = { title: "", complete: false}

    // store user input into state
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({ [name]: value })

    }

    handleSubmit = (e) => {
        e.preventDefault(
            // adding to todo the user made from state
            this.props.addTodo(this.state),
            // clear out form
            this.setState({ title: "", complete: false})
        )

    }
    render() {
        const { title } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}

                required
                placeholder="Title"
                />
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default TodoForm