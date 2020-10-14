import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import "./App.css";
import { BudgetReport } from "./pages/budgetReport/BudgetReport";
import { ExpenseForm } from "./pages/expenseForm/ExpenseForm";
import { getBudget } from "./state/actions";
import { useHistory, Link } from "react-router-dom";
import { SubmitButton } from "./components/submitButton/SubmitButton";

function App(props) {
  const { push } = useHistory();

  // const fetchBudget = (event) => {
  //   console.log(props.storeProps);
  //   event.preventDefault();
  //   props.getBudget();
  //   push("/budget-report");
  // };

  return (
    <div className="App">
      <Route exact path="/">
        <ExpenseForm />

        <SubmitButton getBudget={props.getBudget} />
      </Route>
      <Route exact path="/budget-report">
        <BudgetReport
          budget={props.storeProps}
        />
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storeProps: state.budget,
  };
};

//change addAction to the action name
export default connect(mapStateToProps, { getBudget })(App);
