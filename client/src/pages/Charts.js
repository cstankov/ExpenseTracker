import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  AppBar,
  Typography,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import { getExpenses } from "../actions/expenses";
import { BarChart } from "../components/BarChart/BarChart";
import { PieChart } from "../components/PieChart/PieChart";
import useStyles from "./styles";

export const Charts = () => {
  const [sortingBy, setSortingBy] = useState("category");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  const expenses = useSelector((state) => state.expenses);

  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getColors(groupedExpenses) {
    const colors = [];
    for (var i = 0; i < groupedExpenses.length; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  }

  function getGroupedExpenses() {
    var tempHolder = {};
    var groupedExpenses = [];
    if (sortingBy === "category") {
      expenses.forEach(function (d) {
        if (tempHolder.hasOwnProperty(d.category)) {
          tempHolder[d.category] = tempHolder[d.category] + d.cost;
        } else {
          tempHolder[d.category] = d.cost;
        }
      });
      for (var cateProp in tempHolder) {
        groupedExpenses.push({
          category: cateProp,
          cost: tempHolder[cateProp],
        });
      }
    } else {
      expenses.forEach(function (d) {
        if (tempHolder.hasOwnProperty(d.name)) {
          tempHolder[d.name] = tempHolder[d.name] + d.cost;
        } else {
          tempHolder[d.name] = d.cost;
        }
      });
      for (var nameProp in tempHolder) {
        groupedExpenses.push({ name: nameProp, cost: tempHolder[nameProp] });
      }
    }
    return groupedExpenses;
  }

  const groupedExpenses = getGroupedExpenses();
  var labels = [];
  if (sortingBy === "category") {
    labels = groupedExpenses.map((a) => a.category);
  } else {
    labels = groupedExpenses.map((a) => a.name);
  }
  let data = groupedExpenses.map((a) => a.cost);
  const colors = getColors(groupedExpenses);

  return (
    <div maxwidth="lg" className={classes.mainContainer}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2">
          Charts
        </Typography>
        <Select
          name="sortBy"
          variant="outlined"
          label="Sort By"
          defaultValue="category"
          displayEmpty
          onChange={(e) => {
            setSortingBy(e.target.value);
          }}
        >
          <MenuItem value={"category"}>Category</MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
        </Select>
        <Button
          className={classes.button}
          onClick={() => {
            navigate("/");
          }}
        >
          Expense Tracker
        </Button>
      </AppBar>
      <Container maxwidth="large">
        <Paper>
          <PieChart data={data} labels={labels} colors={colors} />
        </Paper>
        <Paper>
          <BarChart data={data} labels={labels} colors={colors} />
        </Paper>
      </Container>
    </div>
  );
};

export default Charts;
