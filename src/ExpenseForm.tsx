import React, { useState } from 'react';

interface ExpenseFormProps {
  onExpenseSubmit: (newExpense: {name: string; amount: number; date: Date}) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onExpenseSubmit }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState(new Date());

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(expenseName && amount){
      onExpenseSubmit({
        name: expenseName,
        amount: expenseAmount,
        date: expenseDate
      });

      setExpenseName('');
      setExpenseAmount(0);
      setExpenseDate(new Date());
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Expense Name:
        <input
          type="text"
          value={expenseName}
          onChange={(event) => setExpenseName(event.target.value)}
        />
      </label>
      <label>
        <input 
          type="number"
          value={expenseAmount}
          onChange={(event) => setExpenseAmount(event.target.value)}
        />
      </label>
      <label>
        <input
          type="date"
          value={expenseDate}
          onChange={(event) => setExpenseDate(event.target.value)}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;