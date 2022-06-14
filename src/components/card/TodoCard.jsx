import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  todoItem: {
    maxWidth: "200px",
    height: "155px",
    background: "#FFFEFE",
    fontSize: "14px",
    boxShadow: "none",
    border: "2px solid #675BF1",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "14px",
    color: "#000000",
    lineHeight: "1.4rem",
  },
  creator: {
    fontSize: "14px",
    color: "#000000",
  },
  description: {
    fontSize: "14px",
    color: "#000000",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    lineHeight: "1.2rem",
  },
  divider: {
    backgroundColor: "#675BF1",
    height: "2px",
    margin: "3px 0",
  },
});

function TodoCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.todoItem}>
        <CardContent style={{ padding: "10px" }}>
          <Typography className={classes.title} variant="h6">
            Title: {props.payload.title}
          </Typography>
          <Typography className={classes.creator}>
            Creator: {props.payload.creator}
          </Typography>
          <Typography
            className={classes.title}
            style={{
              color:
                props.status === "New"
                  ? "#04BE00"
                  : props.status === "Doing"
                  ? "#F88F14"
                  : "#675BF1",
            }}
            variant="h6"
            component="h6"
          >
            Status: {props.status}
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.title} variant="h6" component="h6">
            Description:
          </Typography>
          <Typography className={classes.description}>
            {props.payload.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TodoCard;
