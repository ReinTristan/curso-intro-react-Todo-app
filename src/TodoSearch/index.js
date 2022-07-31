import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
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
