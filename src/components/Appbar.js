import React from "react";
import Constants from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          borderRadius: "4px",
          backgroundColor: Constants.theme.color.primary
        }}
      >
        <Toolbar>
          <Typography className={classes.title}>Voice कमान्ड</Typography>
          <Button color="inherit">Info</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
