import React from "react";
import { IncomingFinances } from "../../components/incomingFinances/IncomingFinances";
import { OutgoingExpenses } from "../../components/outgoingExpenses/OutgoingExpenses";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";

export const BudgetReport = (props) => {
  return (
    <>
      {/* TODO Add react vis XY Plot */}
      {/* <Link to="/budget-report">
        <IncomingFinances />
        <OutgoingExpenses />
      </Link> */}
      <Card>
        <CardContent>
          <Typography id="standard-basic" label={props.name} />
          <Typography
            id="standard-basic"
            label="Outgoing Expenses"
            value={props.item_name}
          />
          <Typography
            id="standard-basic"
            label="Outgoing Expenses"
            value={props.category}
          />
          <Typography
            id="standard-basic"
            label="Outgoing Expenses"
            value={props.purchase_date}
          />
          <Typography
            id="standard-basic"
            label="Outgoing Expenses"
            value={props.item_price}
          />
          </CardContent>
        </Card>
    </>
  );
};
