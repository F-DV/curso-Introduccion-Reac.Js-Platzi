import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal/index';
import {TodoForm} from '../TodoForm'
import {Emptytodos} from '../EmptyTodos/index';
import {Todosloading} from '../TodosLoading/index';
import {TodosError} from '../TodosError/index';


function AppUI(){

    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
            {error && <TodosError/>}
            {loading && 
            new Array(4).fill().map((item, index)=>(
              <Todosloading key={index} />))}
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
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />      
    </React.Fragment>
    );
}
export {AppUI};