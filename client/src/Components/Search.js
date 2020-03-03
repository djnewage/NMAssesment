import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { PropTypes } from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./style";

const propTypes = {
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func
};

export default function SearchAppBar({ searchTerm, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            s
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Crypto Currency Tracker
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={searchTerm}
              onChange={e => handleChange(e)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = propTypes;
