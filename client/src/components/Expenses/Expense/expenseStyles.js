import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    height: "7vh",
    minHeight: "75px",
    minWidth: "400px",
    padding: "10px",
    borderBottom: "3px solid black",
    backgroundColor: "white",
  },
  cardInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50vw",
    maxWidth: "900px",
    whiteSpace: "nowrap",
    overflowX: "auto",
    textOverflow: "ellipsis",
  },
  cardInfoItem: {
    paddingBottom: "5px",
  },
});
