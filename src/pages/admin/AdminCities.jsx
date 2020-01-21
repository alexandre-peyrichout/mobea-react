import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nom', field: 'name' },
      { title: 'Country', field: 'country_idcountry' }
    ],
    data: [{ name: 'test' }, { name: 'Rabat' }, { name: 'Tanger' }, { name: 'Agadir' }]
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/city')
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
  }, []);

  return (
    <MaterialTable
      title="Liste des villes"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            axios
              .post('http://localhost:3000/api/city/new', {
                name: newData.name,
                country_idcountry: newData.country_idcountry
              })
              .catch(function(error) {
                console.log(error);
              });
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
            axios({
              method: 'put',
              url: `http://localhost:3000/api/city/${newData.idcity}`,
              data: {
                name: newData.name,
                country_idcountry: newData.country_idcountry
              }
            }).then(function(response) {
              console.log(response.data);
            });
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  console.log(newData);
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
