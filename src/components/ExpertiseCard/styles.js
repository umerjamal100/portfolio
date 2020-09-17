import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.04)",
    borderRadius: 5,
    padding: 15,
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: 300,

    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
    },
  },

  icon: {
    color: "#7510f7",
    fontSize: "3em",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "1.75em",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
  },
  description: {
    fontSize: "1.25em",
    textAlign: "center",
  },
}));
