import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { TodoListContext } from "../TodoListContext";
import { useNavigate, useParams } from "react-router-dom";

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
    // marginLeft: "230px",
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
  radioForm: {
    marginLeft: "30px",
    marginTop: "10px",
  },
  buttonDiv: {
    marginLeft: "80px",
  },
}));

function TaskDetail(props) {
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
  const { todoList, updateTodoList } = useContext(TodoListContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodoList = localStorage.getItem("TODO_LIST_QUAN");
    if (storedTodoList === null) {
      updateTodoList([]);
      return;
    }
    updateTodoList(JSON.parse(storedTodoList));
  }, []);

  let todoDetail = todoList.find((item) => item.id === params.id);

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
    addEditedTodoList();
    navigate("/");
  };

  const addEditedTodoList = () => {
    let filterTodoList = todoList.filter((card) => card.id !== params.id);
    const addEditTodoList = [
      {
        id: params.id,
        status: radioValue,
        payload,
      },
      ...filterTodoList,
    ];
    updateTodoList(addEditTodoList);
    localStorage.setItem("TODO_LIST_QUAN", JSON.stringify(addEditTodoList));
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

  const [radioValue, setRadioValue] = useState("Done");

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleReset = () => {
    setPayload({
      [titleField]: "",
      [creatorField]: "",
      [createdAtField]: "",
      [descriptionField]: "",
    });
  };
  const handleDelete = () => {
    let filterTodoList = todoList.filter((c) => c.id !== params.id);
    localStorage.setItem("TODO_LIST_QUAN", JSON.stringify(filterTodoList));
    navigate("/");
  };

  return (
    <div>
      <CssBaseline />
      <Container px={0} py={2}>
        <Grid container style={{ height: "500px", overflow: "hidden" }}>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <div>
              <label className={classes.label}>Title</label>
              <Input
                value={payload[titleField]}
                onChange={handleChangeTitle}
                className={classes.input}
                placeholder={todoDetail.payload.title}
              />
            </div>
            <div>
              <label className={classes.label}>Creator</label>
              <Input
                value={payload[creatorField]}
                onChange={handleChangeCreator}
                className={classes.input}
                placeholder={todoDetail.payload.creator}
              />
            </div>
            <div>
              <label className={classes.label}>Created at</label>
              <Input
                value={payload[createdAtField]}
                onChange={handleChangeCreatedAt}
                className={classes.input}
                placeholder={todoDetail.payload.createdAt}
              />
            </div>
            <div>
              <label className={classes.label}>Description</label>
              <Input
                value={payload[descriptionField]}
                onChange={handleChangeDescription}
                className={classes.input}
                placeholder={todoDetail.payload.description}
              />
            </div>
            <FormControl component="fieldset" className={classes.radioForm}>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                value={radioValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  className={classes.radioForm}
                  value="New"
                  control={<Radio color="primary" />}
                  label="New"
                />
                <FormControlLabel
                  className={classes.radioForm}
                  value="Doing"
                  control={<Radio color="primary" />}
                  label="Doing"
                />
                <FormControlLabel
                  className={classes.radioForm}
                  value="Done"
                  control={<Radio color="primary" />}
                  label="Done"
                />
              </RadioGroup>
            </FormControl>
            <div className={classes.buttonDiv}>
              <Button type="submit" className={classes.button}>
                Save
              </Button>
              <Button
                type="button"
                className={classes.button}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                type="button"
                className={classes.button}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </form>
        </Grid>
      </Container>
    </div>
  );
}

export default TaskDetail;
