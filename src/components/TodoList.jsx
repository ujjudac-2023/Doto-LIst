import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, editTodo, toggleTodo }) {
  return (
    <ul className="mt-4 space-y-2">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList

