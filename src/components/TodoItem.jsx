import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, deleteTodo, editTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/todos/${todo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: editText, completed: todo.completed }),
        }
      );
      const updatedTodo = await response.json();
      editTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleToggle = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/todos/${todo.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: todo.text, completed: !todo.completed }),
        }
      );
      const updatedTodo = await response.json();
      toggleTodo(updatedTodo);
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8080/api/todos/${todo.id}`, {
        method: "DELETE",
      });
      deleteTodo(todo.id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="flex items-center justify-between bg-white p-4 rounded shadow">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow mr-2 p-1 border rounded"
        />
      ) : (
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      )}
      <div>
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
