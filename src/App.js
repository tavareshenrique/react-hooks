import React, { useEffect, useState, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
