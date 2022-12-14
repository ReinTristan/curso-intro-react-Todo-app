import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoHeader } from '../TodoHeader'
import { useTodos } from './useTodos'
import { ChangeAlert } from '../ChangeAlert'
function App() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		addTodo,
		syncTodos,
	} = useTodos()
	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchText={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={(searchText) => (
					<p className={{ textAlign: 'center' }}>
						No hay resultados para {searchText}
					</p>
				)}
			>
				{(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}
			<CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
			<ChangeAlert sync={syncTodos} />
		</React.Fragment>
	)
}

export default App
