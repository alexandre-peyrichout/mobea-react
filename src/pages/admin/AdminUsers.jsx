import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'id', field: 'iduser' },
      { title: 'Avatar', field: 'avatar' },
      { title: 'Email', field: 'email' },
      { title: 'Prénom', field: 'firstname' },
      { title: 'Nom', field: 'lastname' },
      { title: 'City', field: 'user_city' },
      { title: 'Country', field: 'user_country' }
    ],
    data: [
      {
        iduser: 1,
        avatar: 'gvfcdtgyhjn',
        email: 'pininfarina47@gmail.com',
        firstname: 'kevin',
        lastname: 'parage',
        user_city: 'paname',
        user_country: 'la france wesh'
      }
    ]
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user`)
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MaterialTable
      title="Liste des utilisateurs"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {

            axios
              .post(`${process.env.REACT_APP_API_URL}/api/user/new`, {
                avatar: newData.avatar,
                email: newData.email,
                firstname: newData.firstname,
                lastname: newData.lastname,
                user_city: newData.user_city,
                user_country: newData.user_country
              })
              .then(function (response) {
                console.log(response.data);
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
              .put(`${process.env.REACT_APP_API_URL}/api/user/${newData.iduser}`, {
                info: {
                  iduser: newData.iduser,
                  avatar: newData.avatar,
                  email: newData.email,
                  firstname: newData.firstname,
                  lastname: newData.lastname,
                  user_city: newData.user_city,
                  user_country: newData.user_country
                }
              })
              .then(function(response) {
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
