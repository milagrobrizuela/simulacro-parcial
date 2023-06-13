import React, { useForm } from 'react-hook-form';
import { useState} from 'react';
import axios from 'axios';
import ListadoPlayers from './ListadoPlayers';

const listaMock = [
  {
    "id": 382,
    "full_name": "Philis Tomadoni",
    "email": "ptomadonial@mashable.com",
    "nickname": "ptomadonial",
    "ip_address": "153.99.122.48",
    "age": 47,
    "avatar": "https://robohash.org/veleosperferendis.png?size=50x50&set=set1"
  },
  {
    "id": 808,
    "full_name": "Phillie Mourge",
    "email": "pmourgemf@ehow.com",
    "nickname": "pmourgemf",
    "ip_address": "174.27.209.125",
    "age": 42,
    "avatar": "https://robohash.org/doloremquisreprehenderit.png?size=50x50&set=set1"
  },
  {
    "id": 542,
    "full_name": "Phillis Anscott",
    "email": "panscottf1@about.com",
    "nickname": "panscottf1",
    "ip_address": "12.34.93.248",
    "age": 13,
    "avatar": "https://robohash.org/accusamusdistinctiosit.png?size=50x50&set=set1"
  }
];

const Players = () => {
  const [lista, setLista] = useState(listaMock);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { filtro, orden } = data;

    try {
      const response = await axios.get(`http://localhost:3001/api/players/?filtro=${filtro}&orden=${orden}`);
      setLista(response.data); 
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Filtro:</label>
              <input type="text" className="form-control" {...register('filtro')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Orden:</label>
              <select className="form-select" {...register('orden')}>
                <option value="full_name">Nombre</option>
                <option value="nickname">Apodo</option>
                <option value="id">Número</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      <ListadoPlayers lista={lista} />
    </div>
  );
};

export default Players;
