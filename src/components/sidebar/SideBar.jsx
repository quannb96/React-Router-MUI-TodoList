import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Typography } from "@material-ui/core";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  sidebar: {
    width: "165px",
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#F88F14",
    height: "570px",
  },
  sidebarItem: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28px",
    textTransform: "none",
    padding: 0,
    minWidth: "165px",
    minHeight: "40px",
    borderBottom: "2px solid #fff",
    opacity: 1,
    "& label.Mui-focused": {
      color: "#675BF1",
    },
    "&:focus": {
      color: "#675BF1",
      borderBottom: "2px solid #675BF1",
    },
  },
  link: {
    textDecoration: "none",
  },
});

function SideBar() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.sidebar}>
        {SidebarData.map((item, index) => (
          <Link className={classes.link} key={index} to={item.path}>
            <Tab label={item.title} className={classes.sidebarItem}></Tab>
          </Link>
        ))}
      </Typography>
    </div>
  );
}

export default SideBar;
