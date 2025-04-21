import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        const response = await fetch("http://localhost:8080/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        });
        const newTodo = await response.json();
        addTodo(newTodo);
        setText("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow p-2 border rounded-l"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Add
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
