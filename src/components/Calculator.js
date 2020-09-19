import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Calculator() {

    const [principal, setPrincipal] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const dispatch = useDispatch();
    const total = useSelector((state) => state)

    const updatePrincipal = (e) => {
        setPrincipal(e.target.value);
    }

    const updateInterest = (e) => {
        setInterest(e.target.value);
    }

    const updateYears = (e) => {
        setYears(e.target.value );
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const calculateTotal = (principal, interest, years) => {
        return principal * (1 + (interest * years))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let total = calculateTotal(principal, interest, years)
		dispatch({
			type: 'SET_INTEREST',
			payload: total,
		});
	}
	
  	return (
		<div className="calculator">
			<h1>Interest Calculator</h1>
			<form onSubmit={handleSubmit} className="form">
                <label>Principal 
                    <input
                        type="number"
                        name="principal"
                        value={principal}
                        onChange={updatePrincipal}
                        className="input"
                    />
                </label>
                <label>Annual Interest Rate 
                    <input
                        type="number"
                        name="annualInterestRate"
                        value={interest}
                        onChange={updateInterest}
                        className="input"
                    />
                </label>
                <label>Number of Years 
                    <input
                        type="number"
                        name="years"
                        value={years}
                        onChange={updateYears}
                        className="input"
                    />
                </label>
				<button type="submit" id="submit-button" value="Submit">Calculate Interest</button>
			</form>
            <h2>Total principal with accrued interest: {formatter.format(total)}</h2>
		</div>
  	);
}

export default Calculator;
