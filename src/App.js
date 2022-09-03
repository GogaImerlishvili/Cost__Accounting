import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date(2021, 3, 28),
    amount: 294.54,
  },
  {
    id: 2,
    title: "Rent Car",
    date: new Date(2020, 7, 25),
    amount: 274.54,
  },
  {
    id: 3,
    title: "Toilet Paper",
    date: new Date(2020, 5, 21),
    amount: 204.54,
  },
  {
    id: 4,
    title: "New Books",
    date: new Date(2018, 2, 21),
    amount: 4.54,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
