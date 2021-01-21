import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  /* render editable todo components */
  function rendertodos() {
    return todos.map(t => <EditableTodo
      todo={t}
      update={update}
      remove={remove}
      key={t.id} />);
  }
  return (
    <div>
      {rendertodos()}
    </div>
  );
}

export default EditableTodoList;
