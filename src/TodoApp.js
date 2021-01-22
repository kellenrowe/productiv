import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    let newtoDoWithId = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, newtoDoWithId]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(t => t.id !== id));
  }

  /** render editable todo list */
  function renderEditableTodos() {
    if (todos.length > 0) {
      return (<div className="col-md-6">
        <EditableTodoList todos={todos} update={update} remove={remove} /> </div>)
    }
    return (<span className="text-muted">You have no todos.</span>);
  }

  /** render top todo */
  function renderTopTodo() {
    if (todos.length > 0) {
      return (
        <section className="mb-4">
          <h3>Top Todo</h3>
          <TopTodo todos={todos} />
        </section>)
    }
    return null;
  }

  return (
    <main className="TodoApp">
      <div className="row">
        {renderEditableTodos()}
        <div className="col-md-6">
          {renderTopTodo()}
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;