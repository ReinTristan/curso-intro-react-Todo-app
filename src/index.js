import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'

function App(props) {
	return <h1>{`¡${props.saludo}, ${props.nombre}!`} </h1>
}

function withSaludo(saludo) {
	return function WrappedComponetWithSaludo(WrappedComponet) {
		return function ComponenteDeVerdad(props) {
			return (
				<>
					<WrappedComponet {...props} saludo={saludo} />
					<p>estamos acompañando al WrappedComponet</p>
				</>
			)
		}
	}
}

const AppWithSaludo = withSaludo('wenas')(App)

ReactDOM.render(
	<AppWithSaludo nombre="juanita" />,
	// <App/>,
	document.querySelector('#root')
)
