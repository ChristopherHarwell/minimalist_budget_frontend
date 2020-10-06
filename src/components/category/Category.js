import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// TODO change styles dynamically depending on screen size
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      marginLeft: '1rem',
      marginRight: '1rem'
    },
    mobile: {
      margin: "4rem",
    },
  })
);

export const Category = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl required className={classes.root}>
        <InputLabel htmlFor="outlined-age-native-required">Category</InputLabel>
        {/*  TODO change the state values for the select */}
        <Select
          native
          //   value={state.age}
          //   onChange={handleChange}
          name="category"
          inputProps={{
            id: "outlined-age-native-required",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Bills & Utilities"}>Bills & Utilities</option>
          <option value={"Cash Withdawn"}>Cash Withdawn</option>
          <option value={"Shopping"}>Shopping</option>
          <option value={"Groceries"}>Groceries</option>
          <option value={"Food & Drink"}>Food & Drink</option>
          <option value={"Gas"}>Gas</option>
          <option value={"Health & Wellness"}>Health & Wellness</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </form>
  );
};
