import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Contenu', field: 'content' },
      { title: 'Catégorie', field: 'categorie' }
    ],
    data: [
      { content: 'liste des vaccins obligatoires', categorie: 'Santé' },
      {
        content:
          'Résiliez tous les contrats en cours (eau, gaz, électricité, internet, téléphone, assurances, télésurveillance, etc...)',
        task_type: 'Déménagement'
      }
    ]
  });

  useEffect(() => {
    axios
      .get('https://mobea.herokuapp.com/api/task')
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaterialTable
      title="Liste des tâches à effectuer"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            axios
              .post('https://mobea.herokuapp.com/api/task/new', {
                content: newData.content,
                task_type_idtask_type: newData.categorie
              })
              .catch(function (error) {
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
            axios
              .put(`https://mobea.herokuapp.com/api/task/${newData.idtask}`, {
                content: newData.content,
                task_type_idtask_type: newData.categorie
              })
              .then(function (response) {
                console.log(response.data);
              });
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
