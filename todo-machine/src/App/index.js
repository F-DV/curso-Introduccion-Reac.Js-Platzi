import React from "react";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed:true},
//   {text: 'Tomar el curso de intro a React', completed:false},
//   {text: 'Llorar con la llorona', completed:false}]

function useLocalStorage(itemName,initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = [];
  } else{
    parsedItem =  JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);

  }
  return [
    item,
    saveItem,
  ];
  
}
function App() {

  const [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);

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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue} 
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    
    />
  );
}

export {App};
