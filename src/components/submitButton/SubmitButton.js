import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "3rem",
      display: "flex",
      flexDirection: "column",
      marginLeft: "9rem",
      marginRight: "10rem",
    },
    mobile: {
      margin: "4rem",
    },
  })
);

export const SubmitButton = () => {
  const classes = useStyles();
  return (
    <Button className={classes.root} variant="contained" color="primary">
      Submit
    </Button>
  );
};
