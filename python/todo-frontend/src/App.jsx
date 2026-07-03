import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://127.0.0.1:8000";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (title.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    try {
      await axios.post(`${API}/todos?title=${title}`);
      setTitle("");
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo = async (todo) => {
    const newTitle = prompt("Update Todo", todo.title);

    if (!newTitle) return;

    try {
      await axios.put(
        `${API}/todos/${todo.id}?title=${newTitle}&completed=${todo.completed}`
      );

      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className="todo-card">
        <h1>📝 Todo Manager</h1>
        <p className="subtitle">FastAPI + React + PostgreSQL</p>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="add-btn" onClick={addTodo}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty">
              No Todos Available 🚀
            </div>
          ) : (
            todos.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <div>
                  <h3>{todo.title}</h3>
                  <span>
                    {todo.completed
                      ? "✅ Completed"
                      : "🕒 Pending"}
                  </span>
                </div>

                <div className="buttons">
                  <button
                    className="edit-btn"
                    onClick={() => updateTodo(todo)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;