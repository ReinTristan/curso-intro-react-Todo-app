import React, { useContext } from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
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
		/>
	)
}

export { TodoSearch }
