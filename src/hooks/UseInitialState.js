import { useState, useEffect } from 'react';

const UseInitialState = (API) => {

  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then((responde) => responde.json())
      .then((data) => setVideos(data));
    /*
    Por defecto, cuando no enviamos un segundo argumento,
    React ejecutará la función de useEffect
    cada vez que el componente o sus componentes
    padres actualicen. En cambio, si enviamos un array vacío,
    esta función solo se ejecutará al montar o desmontar el componente.
    se se pasa una variable, se actualizará cuando ella cambie.
    */
  }, []);
  return videos;
};

export default UseInitialState;
