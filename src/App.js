import React from "react";
import { Route } from "react-router";
import "./App.css";
import { BudgetReport } from "./pages/BudgetReport";
import { ExpenseForm } from "./pages/ExpenseForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <ExpenseForm />
      </Route>
      <Route exact path="/budget-report">
        <BudgetReport />
      </Route>
    </div>
  );
}

export default App;
