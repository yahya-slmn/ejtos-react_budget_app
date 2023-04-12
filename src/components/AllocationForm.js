import React, { useState } from 'react';

const AllocationForm = () => {
  const [department, setDepartment] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [action, setAction] = useState('Add');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    switch (event.target.value) {
      case 'Finance':
        setCurrency('USD');
        break;
      case 'Marketing':
        setCurrency('EUR');
        break;
      case 'HR':
        setCurrency('GBP');
        break;
      default:
        setCurrency('USD');
        break;
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      department,
      amount,
      currency,
      action,
    });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='department'>Department:</label>
          <select
            id='department'
            className='form-control'
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value=''>Select department</option>
            <option value='Finance'>Finance</option>
            <option value='Marketing'>Marketing</option>
            <option value='HR'>Human Resources</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount:</label>
          <input
            type='number'
            id='amount'
            className='form-control'
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='currency'>Currency:</label>
          <select
            id='currency'
            className='form-control'
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value='USD'>$ Dollar</option>
            <option value='EUR'>£ Pound</option>
            <option value='GBP'>€ Euro</option>
            <option value='GB'>₹ Ruppee</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Action:</label>
          <div className='btn-group btn-group-toggle'>
            <label className='btn btn-secondary'>
              <input
                type='radio'
                name='action'
                id='add'
                value='Add'
                checked={action === 'Add'}
                onChange={handleActionChange}
              />
              Add
            </label>
            <label className='btn btn-secondary'>
              <input
                type='radio'
                name='action'
                id='reduce'
                value='Reduce'
                checked={action === 'Reduce'}
                onChange={handleActionChange}
              />
              Reduce
            </label>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AllocationForm;
