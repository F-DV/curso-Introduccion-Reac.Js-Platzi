import React from "react";
import {TodoCounter} from "../src/TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: 'Cortar Cebolla', completed:false},
  {text: 'Tomar el curso de intro a React', completed:false},
  {text: 'Llorar con la llorona', completed:false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>      
    </React.Fragment>
  
  );
}

export {App};
