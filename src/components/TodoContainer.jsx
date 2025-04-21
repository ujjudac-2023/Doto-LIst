import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const toggleTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

 return (
   <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300 flex items-center justify-center">
     <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
       <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
         ✨ What Do You Want to DOo
       </h1>

       <div className="mb-6">
         <AddTodo addTodo={addTodo} />
       </div>

       <div>
         {todos.length > 0 ? (
           <TodoList
             todos={todos}
             deleteTodo={deleteTodo}
             editTodo={editTodo}
             toggleTodo={toggleTodo}
           />
         ) : (
           <p className="text-gray-500 text-center">No todos yet. Add one!</p>
         )}
       </div>
     </div>
   </div>
 );

}

export default TodoContainer;
