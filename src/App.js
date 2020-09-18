import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './App.css';

function App() {

    const [form, setForm] = useState({ username: '', password: '' });

    const dispatch = useDispatch();
    let history = useHistory();

    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
        };
        fetch(`https://color-by-nature-api.herokuapp.com/${endpoint}`, config)
        .then(r => r.json())
        .then(user => {
            dispatch({
            type: 'SET_USER',
            payload: user
            });
        });
	}
	
  	return (
		<div className="App">
			<h1>Interest Calculator</h1>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="number"
					name="principal"
					value={form.principal}
					onChange={handleChange}
					placeholder="Principal"
					style={{marginBottom: "10px"}}
					className="input"
				/>
				<input
					type="number"
					name="annualInterestRate"
					value={form.annualInterestRate}
					onChange={handleChange}
					placeholder="Annual Interest Rate"
					className="input"
				/>
				<input
					type="number"
					name="years"
					value={form.years}
					onChange={handleChange}
					placeholder="Number of Years"
					className="input"
				/>
				<input type="submit" id="submit-button" value="Submit"/>
			</form>
		</div>
  	);
}

export default App;
