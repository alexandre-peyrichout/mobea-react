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
      { title: 'Date de naissance', field: 'birthday', type: 'date' },
      { title: 'Adresse', field: 'address' },
      { title: 'City', field: 'city' },
      { title: 'Country', field: 'country' },
      { title: 'Situation', field: 'situation' }
    ],
    data: [
      {
        avatar: '',
        email: 'pininfarina47@gmail.com',
        firstname: 'kevin',
        lastname: 'parage',
        birthday: '1988-09-01',
        address: '33200',
        situation: 'Concubinage ou pacsé'
      }
    ]
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/user/test3')
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
            let formatted_date =
              newData.birthday.getFullYear() +
              '-' +
              (newData.birthday.getMonth() + 1) +
              '-' +
              newData.birthday.getDate();
            axios
              .post(`http://localhost:3000/api/user/new`, {
                iduser: newData.iduser,
                avatar: newData.avatar,
                email: newData.email,
                firstname: newData.firstname,
                lastname: newData.lastname,
                birthday: formatted_date,
                address: newData.address,
                city_idcity: newData.city_idcity,
                country_idcountry: newData.country_idcountry,
                situation_idsituation: newData.situation_idsituation
              })
              .then(function(response) {
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
            let formatted_date =
              newData.birthday.getFullYear() +
              '-' +
              (newData.birthday.getMonth() + 1) +
              '-' +
              newData.birthday.getDate();
            axios
              .put(`http://localhost:3000/api/user/${newData.iduser}`, {
                iduser: newData.iduser,
                avatar: newData.avatar,
                email: newData.email,
                firstname: newData.firstname,
                lastname: newData.lastname,
                birthday: formatted_date,
                address: newData.address,
                city_idcity: newData.city_idcity,
                country_idcountry: newData.country_idcountry,
                situation_idsituation: newData.situation_idsituation
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
