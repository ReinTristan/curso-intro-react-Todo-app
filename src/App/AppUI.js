import React from 'react'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

import './AppUI.css'

function AppUI() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoContext.Consumer>
				{({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
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
				)}
			</TodoContext.Consumer>
			<CreateTodoButton />
		</React.Fragment>
	)
}

export { AppUI }
