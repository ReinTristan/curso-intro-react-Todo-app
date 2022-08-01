import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

import './AppUI.css'

function AppUI() {
	const { loading, error, searchedTodos, completeTodo, deleteTodo } =
		useContext(TodoContext)
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{loading && (
					<p className="loading-message">Estamos cargando no desesperes</p>
				)}
				{!loading && error && (
					<p className="loading-message error-message">
						Desesperate, hubo un error
					</p>
				)}
				{!error && !loading && !searchedTodos.length && (
					<p className="loading-message">Crea tu primer TODO!</p>
				)}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
	)
}

export { AppUI }
