import React from "react";
import { useStyles } from "./styles";
import { Typography, Grid } from "@material-ui/core";
function ExperienceCard({ company, description, icon, designation }) {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row">
        <Grid
          className={`${classes.container} ${classes.textCenter}`}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          item
        >
          <div className={classes.logoContainer}>
            {company?.includes("LLC") ? (
              <img
                alt="codeMemory-icon"
                className={classes.companyLogo}
                src={require("../../assests/images/care.png")}
              />
            ) : (
              <img
                alt="care-icon"
                className={classes.companyLogo}
                src={require("../../assests/images/care.png")}
              />
            )}
          </div>
          <Typography className={classes.heading}>
            test texttttt is this
          </Typography>
        </Grid>
        <Grid className={classes.container} lg={6} md={6} sm={12} xs={12} item>
          <Typography className={classes.designation}>
            Software Engineer
          </Typography>
          <div className={classes.border} />
          <div className={classes.description}>
            Daily responsibilities include: <br />
            <ul className={classes.linksList}>
              <li className={classes.footerLink}>
                {
                  "Development of front end web & cross-platform mobile components for company projects."
                }
              </li>
              {company?.includes("Graana") && (
                <>
                  <li className={classes.footerLink}>
                    Worked on the graana.com web portal and delivered responsive
                    front-end components.
                  </li>
                  <li className={classes.footerLink}>
                    Bootstrapped the project and delivered the first release.
                  </li>
                </>
              )}
              <li className={classes.footerLink}>
                {
                  "Coordinating with QA engineers and project managers on analysing requirements and execution plans. Involved in the complete DevOps cycle."
                }
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ExperienceCard;
