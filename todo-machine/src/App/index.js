import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext/index'

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed:true},
//   {text: 'Tomar el curso de intro a React', completed:false},
//   {text: 'Llorar con la llorona', completed:false}]


function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export {App};
