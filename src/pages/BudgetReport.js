import React from "react";
import { IncomingFinances } from "../components/incomingFinances/IncomingFinances";
import { OutgoingExpenses } from "../components/outgoingExpenses/OutgoingExpenses";

export const BudgetReport = () => {
  return (
    <>
      <IncomingFinances />
      <OutgoingExpenses />
    </>
  );
};
