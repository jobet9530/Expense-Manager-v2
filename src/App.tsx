import './App.css'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useState } from 'react';

const App: React.FC = () => {
   const [expenses, setExpenses] = useState<Array<{ id: number; name: string; amount: number; date: date; }>>([]);

  const addExpense = (expense: { name: string; amount: number; date: date; }) => {
    setExpenses([...expenses, { ...newExpense, id: new Date().getTime() }]);
  };

  const handleDeleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <ExpenseForm onExpenseSubmit={handleExpenseSubmit} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default App;