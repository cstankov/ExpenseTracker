import React from "react";
import { CircularProgress } from "@material-ui/core";
import Expense from "./Expense/Expense";
import useStyles from "./expensesStyles";
import { useSelector } from "react-redux";

const Expenses = ({ setCurrentId }) => {
  const expenses = useSelector((state) => state.expenses);
  const classes = useStyles();

  function compare( a, b ) {
    if ( a.category < b.category ){
      return -1;
    }
    if ( a.category > b.category ){
      return 1;
    }
    return 0;
  }
  
  expenses.sort( compare );

  return !expenses.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.expenseContainer}>
      {expenses.map((expense) => (
        <div className={classes.expenseItem} key={expense._id}>
          <Expense expense={expense} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Expenses;
