import React from 'react';
import { Input } from 'antd';

class TodoHeader extends React.Component {
  constructor() {
    super();
    this.handlerKeyUp = this.handlerKeyUp.bind(this);
  }

  handlerKeyUp(event) {
    // enter 键的keyCode是13
    if (event.keyCode === 13) {
      const value = event.target.value;
      if (!value) return false;
      const newTodoItem = {
        text: value,
        isDone: false,
      };
      event.target.value = '';
      this.props.addTodo(newTodoItem);
    }
    return true;
  }
  render() {
    return (
      <div className="todo-header">
        <h1 className="todo-tile">React-Todos</h1>
        <Input
          autoFocus ref={(node) => { this.input = node; }}
          onKeyUp={this.handlerKeyUp} type="text" placeholder="input the name"
        />
      </div>
    );
  }
}

TodoHeader.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
};

export default TodoHeader;
