import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Context from "../context/Context";
import axios from "axios";
const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255,0.3)"
  },
  scroll: { maxHeight: "70vh", overflow: "auto" },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 16px 0px 16px"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 10px 10px 0",
    backgroundColor: "rgba(255, 255, 255,0.85)",
    margin: "4px 0px",
    color: "#333",
    fontSize: "0.9rem",
    textAlign: "justify"
  },
  listSelect: {
    flexGrow: 1,
    margin: "0px 10px 0px 10px",

    "& *": {
      color: "white",
      textShadow:
        "grey 1px 0px 0px, grey 0.540302px 0.841471px 0px, grey -0.416147px 0.909297px 0px, grey -0.989993px 0.14112px 0px, grey -0.653644px -0.756803px 0px, grey 0.283662px -0.958924px 0px, grey 0.96017px -0.279416px 0px",
      fontSize: "1.5rem",
      textAlign: "center"
    }
  },

  icon: {
    color: "white"
  }
}));

export default function CheckCard() {
  const classes = useStyles();

  const { focusList, setFocusList } = React.useContext(Context);
  const { arrayOfBadges } = React.useContext(Context);
  const { checklists } = React.useContext(Context);
  const { destinationSelected } = React.useContext(Context);
  const { reload, setReload } = React.useContext(Context);

  const handleChangeFocus = (event) => {
    setFocusList(arrayOfBadges.findIndex((list) => list.type === event.target.value));
  };

  const updateIsDone = (event) => {
    const task = event.target.id;
    const value = event.target.checked ? 1 : 0;

    axios
      .put(`https://mobea.herokuapp.com/api/taskHasDestination/${task}/${destinationSelected}/`, {
        isdone: value
      })
      .then((res) => res.data)
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        setReload(reload + 1);
      });
  };

  if (destinationSelected && arrayOfBadges) {
    return (
      <Card className={classes.card} id="card">
        <div className={classes.flex}>
          <TextField
            id="standard-select"
            select
            value={arrayOfBadges && arrayOfBadges[focusList].type}
            onChange={handleChangeFocus}
            className={classes.listSelect}
          >
            {arrayOfBadges &&
              arrayOfBadges.map((option) => (
                <MenuItem key={option.type} value={option.type}>
                  {option.type}
                </MenuItem>
              ))}
          </TextField>
        </div>

        <CardContent className={classes.scroll}>
          {checklists
            .filter((el) => el.destination_iddestination === destinationSelected)
            .filter((el) => el.type === arrayOfBadges[focusList].type)
            .map((task, index) => (
              <Card className={classes.container} key={index}>
                <Checkbox
                  checked={task.isdone}
                  id={task.task_idtask}
                  key={task.task_idtask}
                  color="primary"
                  onChange={(event) => updateIsDone(event)}
                />

                {task.content}
              </Card>
            ))}
        </CardContent>
      </Card>
    );
  } else {
    return <Card className={classes.card} id="card" />;
  }
}
