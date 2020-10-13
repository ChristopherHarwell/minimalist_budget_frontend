import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { getBudget } from "../../state/actions/index";
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

  const fetchBudget = (event) => {
    event.preventDefault();
    props.getBudget();
  };

  const classes = useStyles();
  return (
    <Button onClick={fetchBudget} className={classes.root} variant="contained" color="primary">
      Submit
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    storeProps: state.getBudget,
  };
};
