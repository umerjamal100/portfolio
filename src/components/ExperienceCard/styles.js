import { makeStyles } from "@material-ui/core/styles";
import Colors from "../../styles/Colors";
export const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 5,
    padding: 20,
    minHeight: 250,
    margin: "40px 0 40px 0",
  },
  textCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  logoContainer: {
    width: 150,
    height: 150,
    marginBottom: 10,
    overflow: "hidden",
  },
  companyLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    overflow: "hidden",
  },

  heading: {
    fontWeight: 600,
    fontSize: "1.75em",
    marginBottom: "10px",
    textAlign: "center",
  },
  border: {
    background: Colors.bluish,
    height: "7px",
    width: "65px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  linksList: {
    listStyleType: "square",
    paddingInlineStart: "20px !important",
  },
  footerLink: {
    fontSize: "1em",
    fontWeight: 500,
    color: Colors.textBlack,
    marginBottom: 10,
  },
  designation: {
    fontWeight: 600,
    fontSize: "1.5em",
    marginBottom: "10px",
    color: Colors.textBlack,
  },
}));
