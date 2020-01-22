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
      { title: 'Mot de passe', field: 'password' },
      { title: 'Adresse', field: 'address' },
      { title: 'City', field: 'city_idcity' },
      { title: 'Country', field: 'country_idcountry' },
      { title: 'Situation', field: 'situation_idsituation' }
    ],
    data: [
      {
        avatar: '',
        email: 'pininfarina47@gmail.com',
        firstname: 'kevin',
        lastname: 'parage',
        birthday: '1988-09-01',
        password: '123456',
        address: '33200',
        situation: 'Concubinage ou pacsé'
      },
      {
        avatar: '',
        email: 'zfgyuz@gmail.com',
        firstname: 'efzuyfevg',
        lastname: 'riuhiuzhgr',
        birthday: '',
        address: '',
        situation: 'Concubinage ou pacsé'
      },
      {
        avatar: '',
        email: 'post@man',
        firstname: 'post',
        lastname: 'man',
        birthday: '',
        address: '',
        situation: 'Concubinage ou pacsé'
      },
      {
        avatar: '',
        email: '',
        firstname: '',
        lastname: '',
        birthday: '',
        address: '',
        situation: 'Concubinage ou pacsé'
      },
      {
        avatar: '',
        email: 'nazi@cat.ach',
        firstname: 'nazi',
        lastname: 'cat',
        birthday: '',
        address: '',
        situation: 'Concubinage ou pacsé'
      }
    ]
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/user')
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
  }, []);

  return (
    <MaterialTable
      title="Liste des utilisateurs"
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
                password: newData.password,
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
