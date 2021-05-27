import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => {
       return this.props.todos.map((todo, id) => <Todo key={id} text={todo} /> )
    }

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

// state comes from the invocation of connect,
// which passes state to mapStateToProps
const mapStateToProps = ({todos}) => {
    return ({todos})
}

export default connect(mapStateToProps)(TodosContainer)