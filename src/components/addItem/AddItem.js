import React from "react";
import { FormControl, FormHelperText, InputLabel, Select, TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// TODO change styles dynamically depending on screen size
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "4rem",
      marginLeft: '2rem',
      marginRight: '2rem',
      display: "flex",
      flexDirection: 'column'
    },
    mobile: {
      margin: "4rem"
    }
  })
);

export const AddItem = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Item Name" placeholder=""/>
    </form>
  );
};
