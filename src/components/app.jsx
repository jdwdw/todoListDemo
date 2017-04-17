import React from 'react';
import ReactDom from 'react-dom';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
// import TodoFooter from './TodoFooter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isAllChecked: false,
    };
    this.addTodo = this.addTodo.bind(this);
    this.changeTodoState = this.changeTodoState.bind(this);
    this.allChecked = this.allChecked.bind(this);
    this.clearDone = this.clearDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeTodoText = this.changeTodoText.bind(this);
  }
  addTodo(item) {
    this.state.todos.push(item);
    this.setState({ todos: this.state.todos });
  }
  // 改变状态
  changeTodoState(index, isDone, isChangeAll = false) {
    if (isChangeAll) {
      this.setState({ todos: this.state.todos.map((todo) => {
        todo.isDone = isDone;
        return todo;
      }),
        isAllChecked: isDone,
      });
    } else {
      this.state.todos[index].isDone = isDone;
      this.allChecked();
    }
  }
  // 判断状态
  allChecked() {
    let isAllChecked = false;
    if (this.state.todos.every(todo => todo.isDone)) {
      isAllChecked = true;
    }
    this.setState({
      todos: this.state.todos,
      isAllChecked,
    });
  }
  clearDone() {
    const todos = this.state.todos.filter(todo => !todo.isDone);
    this.setState({
      todos,
    });
  }
  deleteTodo(index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
  }
  changeTodoText(index, value) {
    this.state.todos[index].text = value;
    this.setState({
      todos: this.state.todos,
    });
  }
  render() {
    return (
      <div className="todo-wrapper">
        <h1>todoList</h1>
        <TodoHeader addTodo={this.addTodo} />
        <TodoMain
          todos={this.state.todos} changeTodoState={this.changeTodoState}
          allChecked={this.allChecked} deleteTodo={this.deleteTodo}
          changeTodoText={this.changeTodoText}
        />

      </div>
    );
  }
}
export default App;
ReactDom.render(<App />, document.getElementById('app'));
