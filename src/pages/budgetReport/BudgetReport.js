import React from "react";
import { IncomingFinances } from "../../components/incomingFinances/IncomingFinances";
import { OutgoingExpenses } from "../../components/outgoingExpenses/OutgoingExpenses";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";

export const BudgetReport = (props) => {
  return (
    <Card>
      {/* TODO Add react vis XY Plot */}
      {/* <Link to="/budget-report">
        <IncomingFinances />
        <OutgoingExpenses />
      </Link> */}
      {props.budget.map((items) => (
       
          <CardContent>
            <Typography id="standard-basic" label={"purchaser: ", items.name} />
            <Typography id="standard-basic" label="Outgoing Expenses">
              {"item name: ", items.item_name}
            </Typography>
            <Typography id="standard-basic" label="Outgoing Expenses">
              {"category: ", items.category}
            </Typography>
            <Typography id="standard-basic" label="Outgoing Expenses">
              {"purchase date: ", items.purchase_date}
            </Typography>
            <Typography id="standard-basic" label="Outgoing Expenses">
              {"price: ", "$" + items.item_price}
            </Typography>
          </CardContent>
       
      ))}
    </Card>
  );
};
