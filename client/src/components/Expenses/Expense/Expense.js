import React from "react";
import useStyles from "./expenseStyles";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { deleteExpense } from "../../../actions/expenses";

const Expense = ({ expense, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardInfoContainer}>
        <span className={classes.cardInfoItem}>
          <b>Name:</b> {expense.name}
        </span>
        <span className={classes.cardInfoItem}>
          <b>Category:</b> {expense.category}
        </span>
        <span className={classes.cardInfoItem}>
          <b>Cost:</b> ${numberWithCommas(expense.cost)}
        </span>
      </div>

      <div>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteExpense(expense._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => setCurrentId(expense._id)}
        >
          <Edit fontSize="default" />
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Expense;
