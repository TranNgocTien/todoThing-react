import "./styles.css";
import { useState } from "react";
const listTodo = [
  {
    id: 941576,
    title: "Do home work",
    status: false
  },
  {
    id: 4156996,
    title: "Go to gym",
    status: false
  },
  { id: 299476, title: "Cooking", status: false }
];

export default function App() {
  // const [todo, setToDo] = useState(todoList);
  const [todo, setToDo] = useState(listTodo);
  function onHandleAddToDo(newTodo) {
    setToDo((newTodo) => [...todo, newTodo]);
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Things to do</h2>
        <AddInput onSetTodo={onHandleAddToDo} />
        <TodoList todoList={listTodo} />
      </div>
    </div>
  );
}

function TodoList({ todoList }) {
  return (
    <ul className="toDoList">
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const [status, setStatus] = useState(false);
  function onHandleStatus() {
    setStatus(!status);
  }
  return (
    <li>
      <input
        type="checkbox"
        name={todo.title}
        value={status}
        id={todo.id}
        onClick={onHandleStatus}
      />
      <label className={status ? "isDone" : ""} for={todo.id}>
        {todo.title}
      </label>
    </li>
  );
}

function AddInput({ onSetTodo }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    const id = crypto.randomUUID();
    const newToDo = {
      id: id,
      title: value,
      status: false
    };
    onSetTodo(newToDo);

    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
}
