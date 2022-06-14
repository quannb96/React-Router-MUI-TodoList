import React, { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../TodoListContext";
import { Button, Container, CssBaseline, Grid, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { v4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0 0 170px ",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  label: {
    width: "150px",
    height: "21px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "16px",
    float: "left",
    marginTop: "25px",
  },
  input: {
    width: "350px",
    height: "21px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "16px",
    marginTop: "25px",
    padding: "0 10px 10px",
  },
  button: {
    marginLeft: "230px",
    marginTop: "30px",
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
    borderRadius: "10px",
    "&:hover": {
      background: "#675BF1",
    },
  },
}));

function Create() {
  const { todoList, updateTodoList } = useContext(TodoListContext);

  const navigate = useNavigate();
  const classes = useStyles();
  const titleField = "title";
  const creatorField = "creator";
  const createdAtField = "createdAt";
  const descriptionField = "description";
  const [payload, setPayload] = useState({
    [titleField]: "",
    [creatorField]: "",
    [createdAtField]: "",
    [descriptionField]: "",
  });

  useEffect(() => {
    setPayload(payload);
  }, [payload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      payload[(titleField, creatorField, createdAtField, descriptionField)]
        .length <= 1
    ) {
      alert("Invalid");
      return;
    }
    // add NewTask to todoList, update at localStorage >>>
    const newTodoList = [
      {
        id: v4(),
        status: "New",
        payload,
      },
      ...todoList,
    ];
    updateTodoList(newTodoList);
    localStorage.setItem("TODO_LIST_QUAN", JSON.stringify(newTodoList));

    navigate("/new");
  };

  const handleChangeTitle = (e) => {
    setPayload({
      ...payload,
      [titleField]: e.target.value,
    });
  };
  const handleChangeCreator = (e) => {
    setPayload({
      ...payload,
      [creatorField]: e.target.value,
    });
  };
  const handleChangeCreatedAt = (e) => {
    setPayload({
      ...payload,
      [createdAtField]: e.target.value,
    });
  };
  const handleChangeDescription = (e) => {
    setPayload({
      ...payload,
      [descriptionField]: e.target.value,
    });
  };

  return (
    <div>
      <CssBaseline />
      <Container px={0} py={2}>
        <form onSubmit={handleSubmit} className={classes.root}>
          <div>
            <label className={classes.label}>Title</label>
            <Input
              value={payload[titleField]}
              onChange={handleChangeTitle}
              className={classes.input}
              placeholder="Title"
            />
          </div>
          <div>
            <label className={classes.label}>Creator</label>
            <Input
              value={payload[creatorField]}
              onChange={handleChangeCreator}
              className={classes.input}
              placeholder="Name of Creator"
            />
          </div>
          <div>
            <label className={classes.label}>Created at</label>
            <Input
              value={payload[createdAtField]}
              onChange={handleChangeCreatedAt}
              className={classes.input}
              placeholder="08-02-2021 07:45:20"
            />
          </div>
          <div>
            <label className={classes.label}>Description</label>
            <Input
              value={payload[descriptionField]}
              onChange={handleChangeDescription}
              className={classes.input}
              placeholder="Description Details"
            />
          </div>
          <Button type="submit" className={classes.button}>
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Create;
