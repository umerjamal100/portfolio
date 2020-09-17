import { makeStyles } from "@material-ui/core/styles";
import Colors from "../../styles/Colors";
export const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${require("../../assests/images/headerImage.jpg")})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    minHeight: "60vh",
    maxHeight: "999px",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    zIndex: 100,
    filter: "brightness(0.7)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  hireButton: {
    textTransform: "capitalize",
    color: "white",
    borderColor: "white",
    borderWidth: "2px",
    fontSize: "1.5em",
    fontWeight: 500,
    whiteSpace: "noWrap",
    minWidth: 200,

    "&:hover": {
      color: "black",
      borderWidth: "2px",
      borderColor: "white",
      background: "white",
    },

    [theme.breakpoints.up("sm")]: {
      marginRight: 15,
    },

    [theme.breakpoints.down("xs")]: {
      minWidth: 150,
    },
  },
  textContainer: {
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%,-50%)",
    color: "white",
    zIndex: 100,
  },
  centerText: {
    fontSize: "3.5em",
    fontWeight: "600",
    textAlign: "left",
    lineHeight: "70px",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    zIndex: 100,
    transform: "translate(-50%,-50%)",
    [theme.breakpoints.down("xs")]: {
      bottom: "30%",
      justifyContent: "space-around",
    },
  },
  cvButton: {
    textTransform: "capitalize",
    color: "white",
    fontSize: "1.5em",
    borderColor: "white",
    borderWidth: "2px",
    fontWeight: 500,
    whiteSpace: "noWrap",
    minWidth: 200,
    "&:hover": {
      borderColor: Colors.bluish,
      background: Colors.bluish,
      borderWidth: "2px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 170,
    },
  },
}));
