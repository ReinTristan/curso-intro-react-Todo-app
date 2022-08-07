import React, { cloneElement, Children } from 'react'

function TodoHeader({ children, loading }) {
	const childrenArray = Children.toArray(children)
	return (
		<header>
			{childrenArray.map((child) => cloneElement(child, { loading }))}
		</header>
	)
}

export { TodoHeader }
