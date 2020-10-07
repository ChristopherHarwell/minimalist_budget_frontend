import React from "react";
import { IncomingFinances } from "../components/incomingFinances/IncomingFinances";
import { OutgoingExpenses } from "../components/outgoingExpenses/OutgoingExpenses";
import { Link } from "react-router-dom";

export const BudgetReport = () => {
  return (
    <>
    {/* TODO Add react vis XY Plot */}
      <Link to="/budget-report">
        <IncomingFinances />
        <OutgoingExpenses />
      </Link>
    </>
  );
};
