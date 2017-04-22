import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDom from 'react-dom';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';

// React component
class TodoList extends React.Component {
  render() {
    console.log('2222');
    const { todos } = this.props;
    console.log(todos);
    return (
      <div className="todo-wrapper">
        <h1>todoList</h1>
        <TodoHeader />
        <TodoMain
          todos={todos}
        />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array,
};
TodoList.defaultProps = {
  todos: [],
};

function todoList(state = { todos: [{ text: 'testText', isDone: false }], isAllChecked: false }, action) {
  const todoLists = [];
  todoLists.push(...state.todos);
  console.log(todoLists);
  // const isAllChecked = state.isAllChecked;
  switch (action.type) {
    case 'addTodo':
      todoLists.push(action.item);
      return { todos: todoLists };
    case 'deleteTodo':
      todoLists.splice(action.index, 1);
      return { todos: todoLists };
    case 'changeTodoText':
      todoLists[action.index].text = action.value;
      return { todos: todoLists };
    case 'changeTodoState':
      todoLists[action.index].isDone = action.isDone;
      console.log('changeTodoState');
      console.log(todoLists);
      return { todos: todoLists };
    default :
      return state;

  }
}

// Store
const store = createStore(todoList, window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__());

// Map Redux state to component props
function mapStateToProps(state) {
  console.log(state.todos);
  return {
    todos: state.todos,
  };
}

// Map Redux action to component props
// function mapDispatchToProps(dispatch) {
// return {
//       dispatch({type:'ssss',filer{}})
//   };
// }

// Connected Component
const App = connect(
  mapStateToProps,
)(TodoList);

export default App;
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
