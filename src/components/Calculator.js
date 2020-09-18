import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Calculator() {

    const [principal, setPrincipal] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const dispatch = useDispatch();

    const updatePrincipal = (e) => {
        setPrincipal(e.target.value);
    }

    const updateInterest = (e) => {
        setInterest(e.target.value);
    }

    const updateYears = (e) => {
        setYears(e.target.value );
    }

    const calculateInterest = (principal, interest, years) => {
        
    }
    
    const handleSubmit = (e) => {
        let interest = calculateInterest(principal, interest, years)
		dispatch({
			type: 'SET_INTEREST',
			payload: interest,
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
                        onChange={updatePrincipal}
                        className="input"
                    />
                </label>
                <label>Annual Interest Rate 
                    <input
                        type="text"
                        name="annualInterestRate"
                        value={form.annualInterestRate}
                        onChange={updateInterest}
                        className="input"
                    />
                </label>
                <label>Number of Years 
                    <input
                        type="text"
                        name="years"
                        value={form.years}
                        onChange={updateYears}
                        className="input"
                    />
                </label>
				<button type="submit" id="submit-button" value="Submit">Calculate Interest</button>
			</form>
		</div>
  	);
}

export default Calculator;
