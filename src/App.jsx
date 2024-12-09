import React, { useState, useEffect } from 'react';
import './FetchData.css';

function FetchData() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null); // Armazena a localização do usuário

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://09441c3d-9208-4fa9-a576-ba237af6b17c.mock.pstmn.io/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData.Dados);
        setMsg(responseData.Msg);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
    }
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro: {error.message}</p>
      ) : (
        <><div className='container'>
              <ul>
                {data.map((item, index) => (
                  <li key={index}>
                    Nome: {item.Nome} - {item.Disponivel ? msg : "Usuário não encontrado"}
                  </li>
                ))}
              </ul>
            </div>
            <div>
                {location && (
                  <p className='footer'>
                    Sua localização: Latitude {location.latitude}, Longitude {location.longitude}
                  </p>
                )}
            </div></>
          )}
    </div>
  );
}

export default FetchData;
