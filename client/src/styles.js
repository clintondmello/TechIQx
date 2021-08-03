import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 1,
  },
  heading: {
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  mainContainer: {
    marginLeft: "0px",
    marginRight: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    maxWidth: "100%",
  },
  body: {
    margin: "0px",
  },
}));
