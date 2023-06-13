import React from 'react';

const ListadoPlayers = ({ lista }) => {
  
  console.log(lista);
  console.log(typeof lista);
  return (
    <div className="container mt-3">
      <h3>Jugadores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apodo</th>
            <th>Edad</th>
            <th>Dirección IP</th>
          </tr>
        </thead>
        <tbody>
        {lista.map((player) => (
          <tr key={player.id}>
            <td>
              <img src={player.avatar} alt="Avatar"/>
            </td>
            <td>{player.id}</td>
            <td>{player.full_name}</td>
            <td>{player.email}</td>
            <td>{player.nickname}</td>
            <td>{player.age}</td>
            <td>{player.ip_address}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
