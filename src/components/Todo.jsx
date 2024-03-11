import React from 'react'
import FilterButton from './FilterButton';
import { useState } from 'react';
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addTodo, updateSarchTerm } from '../redux/actions';
import TodoList from './TodoList';


export const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

     const handleAddToDo = (text) => {
        dispatch(addTodo(text))
     }
    const handleAddTodoClick = () =>{
        if(newTodoText.trim() !== ""){
            handleAddToDo(newTodoText.trim());
            setNewTodoText("")
        }
    }
    const handleSearchChange = (value) =>{
       setSearchTerm(value);
       dispatch(updateSarchTerm(value))
    }
    // console.log(newTodoText);
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
        <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>PERSONAL TODO APP</h2>
        {/* input text and btn */}

        <div className='flex items-center mb-4'>
            <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name='addTodInput' id='addTodInput' placeholder='Ajouter une liste de tache' 
             className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
             <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600
              focus:outline-none' onClick={handleAddTodoClick}><BsPlus /></button>
        </div>

        {/* filter and Search */}
        <div className='flex items-center justify-between'>
            <FilterButton></FilterButton>
            <div className='flex items-center mb-4'>
            <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name='addTodInput' id='addTodInput' placeholder='search' 
             className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
             <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' 
            ><BsSearch /></button>
            </div>

        </div>

        <TodoList></TodoList>
    </div>
  );
};
export default Todo;