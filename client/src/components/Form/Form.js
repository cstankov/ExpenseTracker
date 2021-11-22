import React, { useState, useEffect } from "react";
import useStyles from "./formStyles";
import { useDispatch, useSelector } from "react-redux";
import { createExpense, updateExpense } from "../../actions/expenses";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
} from "@material-ui/core";

const Form = ({ currentId, setCurrentId }) => {
  const [expenseData, setExpenseData] = useState({
    name: "",
    cost: "",
    category: "",
  });
  const expense = useSelector((state) =>
    currentId ? state.expenses.find((ex) => ex._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (expense) setExpenseData(expense);
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateExpense(currentId, expenseData));
    } else {
      dispatch(createExpense(expenseData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setExpenseData({ name: "", cost: "", category: "" });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} an Expense
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={expenseData.name}
          onChange={(e) =>
            setExpenseData({ ...expenseData, name: e.target.value })
          }
        ></TextField>
        <TextField
          name="cost"
          variant="outlined"
          label="Cost"
          fullWidth
          value={expenseData.cost}
          onChange={(e) =>
            setExpenseData({ ...expenseData, cost: e.target.value })
          }
        ></TextField>
        <Select
          name="category"
          variant="outlined"
          label="Category"
          fullWidth
          defaultValue="Other"
          value={expenseData.category}
          onChange={(e) =>
            setExpenseData({ ...expenseData, category: e.target.value })
          }
        >
          <MenuItem value={"Other"}>Other</MenuItem>
          <MenuItem value={"Rent/Motgage"}>Rent/Motgage</MenuItem>
          <MenuItem value={"Utilities"}>Utilities</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          <MenuItem value={"Stonks"}>Stonks</MenuItem>
          <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"Food"}>Food</MenuItem>
          <MenuItem value={"Supplies"}>Supplies</MenuItem>
          <MenuItem value={"Travel"}>Travel</MenuItem>
          <MenuItem value={"Health"}>Health</MenuItem>
        </Select>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
