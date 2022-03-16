import React, { useState } from 'react'
import './TodoList.css'
import TextField from '../TextField/TextField'
import TaskList from '../TaskList/TaskList'

function TodoList() {
const [todolist, setTodolist] = useState([])

const addTodoItem = (e) => {
	if(e.keyCode === 13) {
		let localList = [...todolist];
		localList.push({
			id: localList.length+1,
			value: e.target.value,
			isFav: false,
		});
		setTodolist(localList);
		e.target.value = '';
	}
}

const addFav = id => {
	if(todolist.length > 0) {
		let tempList = [...todolist];
		let elem = tempList.filter(task => task.id === id);
		if(elem && elem[0]){
			elem[0].isFav = !elem[0].isFav;
			setTodolist(tempList);
		}
	}
}

const removeTask = id => {
	if(todolist.length > 0) {
		let tempList = [...todolist];
		let filteredList = tempList.filter(task => task.id !== id);
		setTodolist(filteredList);
	}
}
  return (
	<div className='todo-list'>
		<h1 className="todo-list__header">Todo List</h1>
		<TextField addItem={addTodoItem} />
		<TaskList todolist={todolist} addFav={addFav} removeTask={removeTask} />
	</div>
  )
}

export default TodoList;