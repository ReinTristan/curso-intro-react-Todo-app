import React, { useState } from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'

// function App() {
// 	return (
// 		<TodoProvider>
// 			<AppUI />
// 		</TodoProvider>
// 	)
// }

function App() {
	const [state, setState] = useState('esta compartido')
	return (
		<>
			<TodoHeader>
				<TodoCounter />
				<TodoSearch />
			</TodoHeader>
			<TodoList>
				<TodoItem state={state} />
			</TodoList>
		</>
	)
}
function TodoHeader({ children }) {
	return <header>{children}</header>
}
function TodoList({ children }) {
	return <section className="TodoList-container">{children}</section>
}
function TodoCounter() {
	return <p>TodoCounter</p>
}

function TodoSearch() {
	return <p>TodoSearch</p>
}
function TodoItem({ state }) {
	return <p>TodoItem {state}</p>
}

export default App
