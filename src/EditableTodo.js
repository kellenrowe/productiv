import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    let todoDiv = evt.target.parentElement.parentElement;
    todoDiv.style.display = "none";
    let todoFormDiv = document.querySelector(".EditableTodo-form");
    todoFormDiv.style.display = "unset";
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
  }

  return (
    <div className="EditableTodo">

      <div className="EditableTodo-form" style={{ display: "none" }}>
        <TodoForm handleSave={handleSave} initialFormData={todo} />
      </div>

      <div className="mb-3">
        <div className="float-right text-sm-right">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
                    </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
                    </button>
        </div>
        <Todo
          id={todo.id}
          title={todo.title}
          description={todo.description}
          priority={todo.priority} />
      </div>

    </div>
  );
}

export default EditableTodo;
