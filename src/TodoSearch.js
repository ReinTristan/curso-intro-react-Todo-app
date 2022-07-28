import React, { useState } from 'react'
import './TodoSearch.css'

function TodoSearch() {
	const [searchValue, setSearchValue] = useState('')

	const onSearchValueChanged = (event) => {
		console.log(event.target.value)
		setSearchValue(event.target.value)
	}
	return [
		<input
			key="b"
			className="TodoSearch"
			placeholder="cebolla2"
			value={searchValue}
			onChange={onSearchValueChanged}
		/>,
		<p key="a">{searchValue}</p>,
	]
}

export { TodoSearch }
