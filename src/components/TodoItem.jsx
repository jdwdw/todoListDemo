import React from 'react';
import { connect } from 'react-redux';
// import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';

class TodoItem extends React.Component {
  render() {
    const { handlerChange, handlerChangeText, handlerDelete, isDone, text } = this.props;
    const className = isDone ? 'task-done' : '';
    return (
      <li className="todo-item">
        <Button
          className="changeButton"
          ref={(node) => { this.changeButton = node; }} size="large"
          onClick={handlerChange}
        />
        <span className={`${className}`}> {text} </span>
        <Input
          style={{ width: 200 }} ref={(node) => { this.input = node; }}
          disabled={!isDone}
          onKeyUp={handlerChangeText} type="text" placeholder="in put name"
        />
        <Button
          className="deleteButton"
          ref={(node) => { this.deleteButton = node; }} type="danger" size="large"
          onClick={handlerDelete}
        />
      </li>
    );
  }
}


TodoItem.propTypes = {
  handlerChange: React.PropTypes.func.isRequired,
  handlerChangeText: React.PropTypes.func.isRequired,
  handlerDelete: React.PropTypes.func.isRequired,
  isDone: React.PropTypes.bool,
  text: React.PropTypes.string,
  //index: React.PropTypes.number,

};
TodoItem.defaultProps = {
  isDone: false,
  text: '',
//  index: 0,
};

// Action
// const deleteAction = {
//   type: 'deleteTodo',
// };
// const changeAction = {
//   type: 'changeTodoText',
// };

// Action Creater
function deleteTodo(index) {
  return {
    type: 'deleteTodo',
    index,
  };
}

function changeTodoText(index, value) {
  return {
    type: 'changeTodoText',
    index,
    value,
  };
}

function changeTodoState(index, isDone) {
  return {
    type: 'changeTodoState',
    index,
    isDone,
  };
}

// Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     todos: state.todos,
//   };
// }
// Map Redux action to component props
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handlerChangeText: (event) => {
      // enter 键的keyCode是13
      let value = ownProps.text;
      if (event.keyCode === 13) {
        value = event.target.value;
        if (!value) return false;

        event.target.value = '';
        return dispatch(changeTodoText(ownProps.index, value));
      }
      return true;
    },
    handlerChange: () => {
      console.log(ownProps);
      const isDone = !ownProps.isDone;
      return dispatch(changeTodoState(ownProps.index, isDone));
    },
    handlerDelete: () => {
      dispatch(deleteTodo(ownProps.index));
    },
  };
}
const TodoItemController = connect(
  null, mapDispatchToProps,
)(TodoItem);

export default TodoItemController;
