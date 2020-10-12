import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import "./App.css";
import { BudgetReport } from "./pages/budgetReport/BudgetReport";
import { ExpenseForm } from "./pages/expenseForm/ExpenseForm";

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

const mapStateToProps = (state) => {
  console.log(state.films)
  return {
    storeProps: state.films
}};
//change addAction to the action name
export default connect(mapStateToProps, {})(App) ;
