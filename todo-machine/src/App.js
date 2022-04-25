import React from "react";
import {TodoCounter} from "../src/TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const defaultTodos = [
  {text: 'Cortar Cebolla', completed:true},
  {text: 'Tomar el curso de intro a React', completed:false},
  {text: 'Llorar con la llorona', completed:false}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  let searchTodos = [];

  if(!searchValue.length >= 1 ){
    searchTodos = todos;
  }else { 
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

     return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete ={() => deleteTodo(todo.text)}     
        />
        ))}
      </TodoList>
      <CreateTodoButton/>      
    </React.Fragment>
  
  );
}

export {App};
