import { useState } from 'react';

export default function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      setError('Todos los campos son obligatorios');
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError('El correo no es válido');
      return;
    }
    setError('');
    alert('Formulario enviado con éxito ✅');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <input
        type='email'
        placeholder='Correo electrónico'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
}
