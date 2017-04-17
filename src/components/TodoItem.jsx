import React from 'react';
// import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerDelete = this.handlerDelete.bind(this);
    this.handlerChangeText = this.handlerChangeText.bind(this);
  }
  handlerChange() {
    const isDone = !this.props.isDone;
  //  this.input.disable = isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }
  handlerDelete() {
    this.props.deleteTodo(this.props.index);
  }
  handlerChangeText(event) {
    let value = this.props.text;
    if (event.keyCode === 13) {
      value = event.target.value;
      if (!value) return false;
    }
    this.props.changeTodoText(this.props.index, value);
    return true;
  }

  render() {
    const className = this.props.isDone ? 'task-done' : '';
    return (
      <li className="todo-item">
        <Button
          className="changeButton"
          ref={(node) => { this.changeButton = node; }} size="large"
          onClick={this.handlerChange}
        />
        <span className={`${className}`}> {this.props.text} </span>
        <Input
          style={{ width: 200 }} ref={(node) => { this.input = node; }}
          disabled={!this.props.isDone}
          onKeyUp={this.handlerChangeText} type="text" placeholder="in put name"
        />
        <Button
          className="deleteButton"
          ref={(node) => { this.deleteButton = node; }} type="danger" size="large"
          onClick={this.handlerDelete}
        />
      </li>
    );
  }
}


TodoItem.propTypes = {
  isDone: React.PropTypes.bool,
  text: React.PropTypes.string,
  changeTodoState: React.PropTypes.func.isRequired,
  index: React.PropTypes.number,
  deleteTodo: React.PropTypes.func.isRequired,
  changeTodoText: React.PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  isDone: false,
  text: '',
  index: 0,
};

export default TodoItem;
