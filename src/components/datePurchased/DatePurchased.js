import { TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import 'date-fns';
import React from "react";

// TODO change styles dynamically depending on screen size
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    mobile: {
      margin: "4rem",
    },
  })
);

export const DatePurchased = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="standard-basic"
        label="Date"
        defaultValue=""
      />
    </form>
  );
};
