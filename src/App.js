import './App.css';
import React from 'react';

function App() {
  const [ state, setState ] = React.useState(false);

  function onChange(event) {
	const emailText = event.target.value;
	return emailText.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? setState(true) : setState(false);
  }

  return (
	<div className="mainApp">
		<h1 style={{margin: 0}}>Check email</h1>
		<div className="email">
			<input onChange={onChange} placeholder="test-email@gmail.com" />
			<h2 style={{
				marginLeft: 5, 
				color: state ? "green" : "red",}}>{state ? "Valid Email" : "Invalid email!"}</h2>
		</div>

	</div>
  );
}

export default App;
