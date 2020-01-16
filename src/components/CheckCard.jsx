import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
// import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Context from '../context/Context';

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255,0.3)'
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 16px 0px 16px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1rem 0',
    backgroundColor: 'rgba(255, 255, 255,0.85)',
    margin: '4px 0px'
  },
  listSelect: {
    flexGrow: 1,
    margin: '0px 10px 0px 10px',

    '& *': {
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  },

  icon: {
    color: 'white'
  }
}));

export default function CheckCard() {
  const classes = useStyles();
  const { list, setList } = React.useContext(Context);
  const { focusList, setFocusList } = React.useContext(Context);

  const handleChange = event => {
    setFocusList(list.findIndex(list => list.title === event.target.value));
  };

  const handleList = (task, focusList, index) => {
    setList(list, (list[focusList].tasks[index].checked = !task.checked));
  };

  return (
    <Card className={classes.card} id="card">
      <div className={classes.flex}>
        {/* <VerifiedUserIcon className={classes.icon} fontSize="medium" /> */}
        <TextField
          id="standard-select"
          select
          value={list[focusList].title}
          onChange={handleChange}
          className={classes.listSelect}
        >
          {list.map(option => (
            <MenuItem key={option.title} value={option.title}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <CardContent>
        {list[focusList].tasks.map((task, index) => (
          <Card className={classes.container} key={index}>
            <Checkbox
              checked={task.checked}
              key={index}
              color="primary"
              onChange={() => handleList(task, focusList, index)}
            />
            {task.text}
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
