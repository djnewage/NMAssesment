import styled from "styled-components";
import { fade, makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
`;

export const CardContainer = styled.div`
  border: 1px solid lightblue;
  width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  .img-container {
  }
  .card-content {
    margin-left: 10px;
    width: 100%;
  }
  .dollar {
    color: rgb(16, 112, 224);
  }
`;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "sticky",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));
