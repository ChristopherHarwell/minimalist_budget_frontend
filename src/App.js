import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import "./App.css";
import { BudgetReport } from "./pages/budgetReport/BudgetReport";
import { ExpenseForm } from "./pages/expenseForm/ExpenseForm";
import { getBudget } from "./state/actions";

function App(props) {
  const fetchBudget = (event) => {
    event.preventDefault();
    props.getBudget();
  };

  return (
    <div className="App">
      <Route exact path="/">
        <ExpenseForm />
      </Route>
      <Route exact path="/budget-report">
        <BudgetReport
          name={props.storeProps.name}
          item_name={props.storeProps.item_name}
          category={props.storeProps.category}
          purchase_date={props.storeProps.purchase_date}
          item_price={props.storeProps.item_price}
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
