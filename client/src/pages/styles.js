import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    minWidth: "400px",
    margin: "30px 0",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: 15,
  },
  heading: {
    align: "left",
    color: "rgba(64, 63, 63, 1)",
    userSelect: "none",
  },
  image: {
    marginLeft: "15px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "90vw",
  },
  contentCardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    minWidth: "500px",
    marginRight: "20px",
  },
  contentFormContainer: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    minWidth: "300px",
    marginLeft: "20px",
  },
  contentContinerLHS: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentContainerTotal: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignSelf: "center",
    width: "fit-content",
    minWidth: "250px",
    marginTop: "10px",
    marginBottom: "100px",
    marginLeft: "20px",
    padding: "10px",
    border: "2px, solid, black",
    borderRadius: "10px",
    backgroundColor: "white",
  },
}));
