import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios
      .get('/api')
      .then((response) => {
        setHello(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
}

export default App;
