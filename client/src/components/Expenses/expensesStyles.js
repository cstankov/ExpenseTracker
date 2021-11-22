import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  expenseContainer: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
    overflowY: "scroll",
    overflowX: "hidden",
    border: "3px solid black",
    borderRadius: "10px",
  },
  expenseItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
