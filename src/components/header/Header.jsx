import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { Toolbar } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#675BF1",
    height: "70px",
    padding: 0,
  },
  button: {
    background: "#675BF1",
    color: "#fff",
    border: "2px solid #fff",
    height: "50px",
    margin: "10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28px",
    textTransform: "none",
    borderRadius: "0 10px 10px 0",
  },
  input: {
    margin: "10px",
    background: "#675BF1",
    color: "#fff",
    border: "2px solid #fff",
    height: "50px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28px",
    textTransform: "none",
    borderRadius: " 10px 0 0 10px ",
    padding: "6px 8px",
    width: "500px",
    marginLeft: "175px",
    outline: "none",
  },
});

function Header(props) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState([]);

  return (
    <div>
      <Toolbar className={classes.header}>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/create"
        >
          <Button type="button" className={classes.button}>
            Create New Task
          </Button>
        </Link>
        <Input
          placeholder="Type something to search"
          className={classes.input}
          disableUnderline={true}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/search"
        >
          <Button
            type="button"
            className={classes.button}
            onClick={() => props.onSearchValue(searchValue)}
          >
            Search
          </Button>
        </Link>
      </Toolbar>
    </div>
  );
}

export default Header;
