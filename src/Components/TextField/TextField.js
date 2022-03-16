import React from 'react'
import './TextField.css'

function TextField({addItem}) {
  return (
	<div className='textfield'>
		<input type='text' placeholder='Enter your todo task' onKeyUp={addItem} />
	</div>
  )
}

export default TextField