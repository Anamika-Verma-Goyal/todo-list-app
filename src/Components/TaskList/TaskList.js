import React, { useEffect, useState } from 'react'
import Task from '../Task/Task'
import './TaskList.css'
import ListAltIcon from '@mui/icons-material/ListAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

function TaskList({ todolist, addFav, removeTask }) {
	const [localTaskList, setLocalTaskList] = useState([...todolist]);
	const [currentPage, setCurrentPage] = useState(1);
  	const [todosPerPage] = useState(4);
	useEffect(() => {
		if (todolist) {
			setLocalTaskList(todolist);
		}
	}, [todolist])

	const onTaskSearch = e => {
		if (e.target.value && e.target.value.length > 1) {
			let tempList = [...todolist.filter(task => (task && task.value && task.value.includes(e.target.value)))];
			setLocalTaskList(tempList);
		}
		if(!e.target.value) {
			setLocalTaskList([...todolist]);
		}
	}
	const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = localTaskList.slice(indexOfFirstTodo, indexOfLastTodo);

	const filterFavTask = e => {
		setLocalTaskList([...localTaskList.filter(task => task?.isFav )]);
	}

	const removeFilter = e => {
		setLocalTaskList([...todolist]);
	}
	const handleClick = (event) =>{
		setCurrentPage(Number(event.target.id))
	}
	const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(localTaskList.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
	const renderPageNumbers = pageNumbers.map(number => {
		return (
		  <li
			key={number}
			id={number}
			onClick={(e) => handleClick(e)}
		  >
			{number}
		  </li>
		);
	  });
	return (
		<div className='tasklist'>
			<div className="tasklist__header">
				<div className="tasklist__header-left">
					<input type="text" className='task-search-bar' placeholder='Search' onKeyUp={onTaskSearch} />
				</div>
				<div className="tasklist__header-right">
					<button onClick={filterFavTask} title='Favourite Filter'> <ListAltIcon   className='star-filter'/></button>
					<button onClick={removeFilter} title='Remove Favourite Filter'><FilterAltOffIcon /></button>
				</div>
			</div>
			<div className="tasklist__body">
				{
					currentTodos?.map(task => (
						<Task task={task} key={task.id} addFav={addFav} removeTask={removeTask} />
					))
				}
			</div>
			<ul className='page-numbers'>{renderPageNumbers}</ul>
		</div>
	)
}

export default TaskList