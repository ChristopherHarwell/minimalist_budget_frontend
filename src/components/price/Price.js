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
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    mobile: {
      margin: "4rem",
    },
  })
);

export const Price = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="standard-basic"
        label="Price"
        defaultValue=""
      />
    </form>
  );
};
