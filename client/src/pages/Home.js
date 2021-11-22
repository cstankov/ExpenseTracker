import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppBar, Typography, Grow, Button } from "@material-ui/core";
import { getExpenses } from "../actions/expenses";
import Expenses from "../components/Expenses/Expenses";
import Form from "../components/Form/Form";
import useStyles from "./styles";

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenses = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(getExpenses());
    calcTotalExpense();
  }, [currentId, dispatch, expenses.length]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calcTotalExpense = () => {
    const total =
      expenses.length !== 0
        ? expenses.map((item) => item.cost).reduce((prev, next) => prev + next)
        : 0;
    setExpenseTotal(numberWithCommas(total));
  };

  return (
    <div maxwidth="lg" className={classes.mainContainer}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2">
          Expense Tracker
        </Typography>
        <Button
          className={classes.button}
          onClick={() => {
            navigate("/charts");
          }}
        >
          Charts
        </Button>
      </AppBar>
      <Grow in>
        <div className={classes.contentContainer}>
          <div className={classes.contentContinerLHS}>
            <div className={classes.contentFormContainer}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
            <div className={classes.contentContainerTotal}>
              <span>
                <b>Total: </b>
              </span>
              <span>${expenseTotal}</span>
            </div>
          </div>

          <div className={classes.contentCardContainer}>
            <Expenses
              setCurrentId={setCurrentId}
              setExpenseTotal={setExpenseTotal}
            />
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default Home;
