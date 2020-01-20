import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import { ArrowBackIos } from '@material-ui/icons';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nom', field: 'name' },
      { title: 'Drapeaux', field: 'flag' }
    ],
    data: [
      { name: 'test', flag: 'flag' },
      { name: 'test', flag: 'flag2' },
      { name: 'Tunisie', flag: 'flag3' },
      { name: 'Sénégal', flag: 'flag4' }
    ]
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/country')
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
  }, []);

  console.log(state);

  return (
    <MaterialTable
      title="Liste des Pays"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
