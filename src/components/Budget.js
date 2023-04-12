import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, updateBudget } = useContext(AppContext);

    // Define state variable to hold current budget value
    const [currentBudget, setCurrentBudget] = useState(budget);

    // Define function to handle input change
    const handleInputChange = (event) => {
        const newBudget = parseInt(event.target.value);
        if (newBudget <= 20000) {
            setCurrentBudget(newBudget);
            updateBudget(newBudget);
        } else {
            window.alert('Budget cannot exceed 20,000.');
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label htmlFor='budget-input'>Budget:</label>
            <input id='budget-input' type='number' min='0' max='20000' value={currentBudget} onChange={handleInputChange} />
        </div>
    );
};

export default Budget;
