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
  scroll: { maxHeight: '70vh', overflow: 'auto' },
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
    padding: '10px 10px 10px 0',
    backgroundColor: 'rgba(255, 255, 255,0.85)',
    margin: '4px 0px',
    color: '#333',
    fontSize: '0.8rem',
    textAlign: 'justify'
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
  const { arrayOfBadges } = React.useContext(Context);
  const { checklists } = React.useContext(Context);
  const { destinationSelected } = React.useContext(Context);

  const handleChangeFocus = event => {
    setFocusList(arrayOfBadges.findIndex(list => list.type === event.target.value));
  };

  const handleChangeListCheck = (task, focusList, index) => {
    setList([...list], (list[focusList].tasks[index].checked = !task.checked));
  };

  if (arrayOfBadges) {
    return (
      <Card className={classes.card} id="card">
        <div className={classes.flex}>
          <TextField
            id="standard-select"
            select
            value={arrayOfBadges[focusList].type}
            onChange={handleChangeFocus}
            className={classes.listSelect}
          >
            {arrayOfBadges &&
              arrayOfBadges.map(option => (
                <MenuItem key={option.type} value={option.type}>
                  {option.type}
                </MenuItem>
              ))}
          </TextField>
        </div>
        <CardContent className={classes.scroll}>
          {checklists
            .filter(el => el.destination_iddestination === destinationSelected)
            .filter(el => el.type === arrayOfBadges[focusList].type)
            .map((task, index) => (
              <Card className={classes.container} key={index}>
                <Checkbox
                  checked={task.isdone}
                  key={index}
                  color="primary"
                  onChange={() => handleChangeListCheck(task, focusList, index)}
                />
                {task.content}
              </Card>
            ))}
        </CardContent>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
