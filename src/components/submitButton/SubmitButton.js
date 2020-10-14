import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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

export const SubmitButton = (props) => {
  const classes = useStyles();
  return (
    <Link to="/budget-report">
      <Button
        onClick={props.getBudget}
        className={classes.root}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Link>
  );
};
