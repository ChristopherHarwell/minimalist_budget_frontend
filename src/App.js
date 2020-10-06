import React from "react";
import { Route } from "react-router";
import "./App.css";
import { BudgetReport } from "./pages/BudgetReport";
import { ExpenseForm } from "./pages/ExpenseForm";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <ExpenseForm />
      </Route>
      <Route path="/budget-form">
        <BudgetReport />
      </Route>
    </div>
  );
}

export default App;
