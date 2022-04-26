import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from '../TodoContext';

function AppUI(){

    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
     <TodoContext.Consumer>
         {({error,
         loading,
         searchTodos,
         completeTodo,
         deleteTodo
        }) => (
        <TodoList>
            {error && <p>Tuvimos un error</p>}
            {loading && <p>Estamos Cargando, No Desesperes</p>}
            {(!loading && !searchTodos.length) && <p>!Crea Tú primer TODO¡</p>}

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
         )}
     </TodoContext.Consumer>
      <CreateTodoButton/>      
    </React.Fragment>
    );
}
export {AppUI};