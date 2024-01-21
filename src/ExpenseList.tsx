import React from 'react';

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>{expense.name} - ₱{expense.amount.} - {expense.date}</span>
          <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
      ))}
    </ul>
  );
};

export defaul ExpenseList;