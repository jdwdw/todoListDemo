import React from 'react';
// import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Input } from 'antd';

class TodoHeader extends React.Component {
  render() {
    const { handlerKeyUp } = this.props;
    return (
      <div className="todo-header">
        <h1 className="todo-tile">React-Todos</h1>
        <Input
          autoFocus ref={(node) => { this.input = node; }}
          onKeyUp={handlerKeyUp} type="text" placeholder="input the name"
        />
      </div>
    );
  }
}

TodoHeader.propTypes = {
  handlerKeyUp: React.PropTypes.func.isRequired,
};

// Action;
// const addAction = {
//   type: 'addTodo',
// };

// Action Creater
function addTodo(item) {
  return {
    type: 'addTodo',
    item,
  };
}

// Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     todos: state.todos,
//   };
// }
// // Map Redux action to component props
function mapDispatchToProps(dispatch) {
  return {
    handlerKeyUp: (event) => {
      // enter 键的keyCode是13
      if (event.keyCode === 13) {
        const value = event.target.value;
        if (!value) return false;
        const newTodoItem = {
          text: value,
          isDone: false,
        };
        event.target.value = '';
        return dispatch(addTodo(newTodoItem));
      }
      return true;
    },
  };
}

const TodoHeaferController = connect(
  null, mapDispatchToProps,
)(TodoHeader);


export default TodoHeaferController;
