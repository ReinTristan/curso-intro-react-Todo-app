import React, { useState } from 'react'

function useStorageListener({ sync }) {
	const [storageChange, setStorageChange] = useState(false)
	React.useEffect(() => {
		const onChange = (change) => {
			if (change.key === 'TODOS_V1') {
				console.log('Hubo cambios en TODOS_V1')
				setStorageChange(true)
			}
		}
		window.addEventListener('storage', onChange)
		return () => {
			window.removeEventListener('storage', onChange)
		}
	}, [])
	const toggleShow = () => {
		sync()
		setStorageChange(false)
	}
	return { show: storageChange, toggleShow }
}

export { useStorageListener }
