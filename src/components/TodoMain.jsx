import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';


const TodoMain = function TodoMain(props) {
  console.log(props);
  const { todos } = props;
  if (todos.length === 0) {
    return (
      <div className="todo-empty ">there is nothing</div>
    );
  }
  return (
    <ul className="todo-main">
      {
        todos.map((todo, index) => {
          todo.id = index;
          console.log(todo.isDone);
          return (
            <TodoItem
              text={todo.text} isDone={todo.isDone}
              index={index} {...props} key={todo.id}
            />
          );
        },

        )
      }
    </ul>
  );
};

TodoMain.propTypes = {
  todos: React.PropTypes.array,
};
TodoMain.defaultProps = {
  todos: [],
};

const TodoMainController = connect(
)(TodoMain);
export default TodoMainController;
