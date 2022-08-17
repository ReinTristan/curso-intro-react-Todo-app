import React, { useState } from 'react'
import './TodoForm.css'
function TodoForm({ addTodo, setOpenModal }) {
	const [newTodoValue, setNewTodoValue] = useState('')

	const [verifyTodo, setVerifyTodo] = useState(false)

	const onChange = (event) => {
		setNewTodoValue(event.target.value)
	}

	const onCancel = () => {
		setOpenModal(false)
	}
	const onSubmit = (event) => {
		event.preventDefault()
		if (newTodoValue.length < 1) {
			setVerifyTodo(true)
		} else {
			addTodo(newTodoValue)
			setOpenModal(false)
		}
	}
	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder="Añadir un nuevo ToDo"
			/>
			{verifyTodo && <p className="verify">Debes Escribir algo</p>}
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					onClick={onCancel}
					className="TodoForm-button TodoForm-button-cancel"
				>
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button-add">
					Añadir
				</button>
			</div>
		</form>
	)
}

export { TodoForm }
