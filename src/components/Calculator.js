import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Calculator() {

    const [principal, setPrincipal] = useState({ principal: '', annualInterestRate: '', years: '' });
    const [interest, setInterest] = useState({ principal: '', annualInterestRate: '', years: '' });
    const [principal, setPrincipal] = useState({ principal: '', annualInterestRate: '', years: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.principal]: e.target.value });
    }
    
    const handleSubmit = (e) => {
		dispatch({
			// type: 'SET_USER',
			// payload: user
		});
	}
	
  	return (
		<div className="calculator">
			<h1>Interest Calculator</h1>
			<form onSubmit={handleSubmit} className="form">
                <label>Principal 
                    <input
                        type="text"
                        name="principal"
                        value={form.principal}
                        onChange={}
                        className="input"
                    />
                </label>
                <label>Annual Interest Rate 
                    <input
                        type="text"
                        name="annualInterestRate"
                        value={form.annualInterestRate}
                        onChange={handleChange}
                        className="input"
                    />
                </label>
                <label>Number of Years 
                    <input
                        type="text"
                        name="years"
                        value={form.years}
                        onChange={handleChange}
                        className="input"
                    />
                </label>
				<button type="submit" id="submit-button" value="Submit">Calculate Interest</button>
			</form>
		</div>
  	);
}

export default Calculator;
