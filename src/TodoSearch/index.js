import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {
	const { searchValue, setSearchValue } = useContext(TodoContext)

	const onSearchValueChanged = (event) => {
		console.log(event.target.value)
		setSearchValue(event.target.value)
	}
	return (
		<input
			key="b"
			className="TodoSearch"
			placeholder="Search Todos"
			value={searchValue}
			onChange={onSearchValueChanged}
		/>
	)
}

export { TodoSearch }
