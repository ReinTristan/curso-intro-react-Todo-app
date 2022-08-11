import { useEffect, useState } from 'react'

function useLocalStorage(itemName, initialValue) {
	const [syncItem, setSyncItem] = useState(true)

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const [item, setItem] = useState(initialValue)
	useEffect(() => {
		try {
			setTimeout(() => {
				const localStorageItem = localStorage.getItem(itemName)
				let parsedItem

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue))
					parsedItem = initialValue
				} else {
					parsedItem = JSON.parse(localStorageItem)
				}
				setItem(parsedItem)
				setLoading(false)
				setSyncItem(true)
			}, 1000)
		} catch (error) {
			setError(error)
		}
	}, [syncItem])

	const syncItems = () => {
		setLoading(true)
		setSyncItem(false)
	}

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem)
			localStorage.setItem(itemName, stringifiedItem)
			setItem(newItem)
		} catch (error) {
			setError(error)
		}
	}
	return { item, saveItem, loading, error, syncItems }
}

export { useLocalStorage }
