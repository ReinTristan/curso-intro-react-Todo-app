import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
	const onSearchValueChanged = (event) => {
		setSearchValue(event.target.value)
	}
	return (
		<input
			key="b"
			className="TodoSearch"
			placeholder="Search Todos"
			value={searchValue}
			onChange={onSearchValueChanged}
			disabled={loading}
		/>
	)
}

export { TodoSearch }
