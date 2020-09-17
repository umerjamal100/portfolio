import React from "react";
import WebIcon from "@material-ui/icons/LaptopMac";
import StorageIcon from "@material-ui/icons/Storage";
import CodeIcon from "@material-ui/icons/Code";
import { useStyles } from "./styles";
import { Typography, Grid } from "@material-ui/core";

function ExpertiseCard(heading, description, icon) {
  const classes = useStyles();
  const renderIcon = (icon) => {
    switch (icon) {
      case "web": {
        return <WebIcon className={classes.icon} />;
      }

      case "backend": {
        return <StorageIcon />;
      }
      case "code": {
        return <CodeIcon />;
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Grid className={classes.container}>
        {renderIcon("web")}
        <Typography className={classes.heading}>Web Development</Typography>
        <Typography className={classes.description}>
          I design and develop native mobile applications for Android and iOS. I
          have expertise in developing mobile apps using react-native and
          flutter.
        </Typography>
      </Grid>
    </>
  );
}

export default ExpertiseCard;
