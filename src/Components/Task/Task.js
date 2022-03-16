import React from 'react'
import './Task.css'
import StarIcon from '@mui/icons-material/Star';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import classNames from 'classnames';

function Task({ task, addFav, removeTask }) {
	return (
		<div className='task'>
			<div className="task__left"> {task.value} </div>
			<div className="task__right">
				<button className={classNames({ glow: task.isFav })} style={{color: 'lightgray'}} onClick={() => addFav(task.id)}> <StarIcon /> </button>
				<button onClick={() => removeTask(task.id)}> <DeleteOutlineIcon /></button>
			</div>
		</div>
	)
}

export default Task