import React from 'react';
import TodoItem from './TodoItem';
// class TodoMain extends React.Component {
//   render() {
//     if (this.props.todos.length === 0) {
//       return (
//         <div className="todo-empty ">there is nothing</div>
//       );
//     }
//     return (
//       <ul className="todo-main">
//         {
//             this.props.todos.map((todo, index) => {
//
//             })
//           }
//       </ul>
//     );
//   }
// }

const TodoMain = function TodoMain(props) {
  if (props.todos.length === 0) {
    return (
      <div className="todo-empty ">there is nothing</div>
    );
  }
  return (
    <ul className="todo-main">
      {
        props.todos.map((todo, index) => {
          todo.id = index;
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

export default TodoMain;
