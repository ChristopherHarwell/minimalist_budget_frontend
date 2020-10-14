import React from "react";
import { AddItem } from "../../components/addItem/AddItem";
import { Category } from "../../components/category/Category";
import { Price } from "../../components/price/Price";
import { DatePurchased } from "../../components/datePurchased/DatePurchased";
import { SubmitButton } from "../../components/submitButton/SubmitButton";
import {Link} from 'react-router-dom'

export const ExpenseForm = () => {
  return (
    <>
      <AddItem />
      <Category />
      <Price />
      <DatePurchased />
      {/* <Link to="/budget-report">
        <SubmitButton/>
      </Link> */}
    </>
  );
};
