import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import Typed from "react-typed";
import { useStyles } from "./styles";
import "./styles.css";

function Header() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.image}></div>
      <Container>
        <div className={classes.textContainer}>
          <Typography className={classes.centerText}>
            Hi I'm Umer &amp; I build
            <br />
            <Typed
              strings={[
                "web applications.",
                "mobile applications.",
                "e-commerce stores.",
                "landing pages.",
                "corporate websites.",
                "User Interfaces.",
              ]}
              startDelay={300}
              typeSpeed={120}
              loop={true}
              loopCount={Infinity}
              fadeOut={true}
              fadeOutClass={"typed-fade-out"}
              fadeOutDelay={500}
              autoInsertCss={true}
            />
          </Typography>
        </div>
        <div className={classes.buttonContainer}>
          <a href="mailto:arslansajid951@gmail.com">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              className={classes.hireButton}
            >
              Hire Me
            </Button>
          </a>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            className={classes.cvButton}
          >
            Download CV
          </Button>
        </div>
      </Container>
    </>
  );
}
export default Header;
