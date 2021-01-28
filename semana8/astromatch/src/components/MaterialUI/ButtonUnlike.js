import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonLike() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="match" size="large">
        <CancelIcon />
      </Fab>
    </div>
  );
}
