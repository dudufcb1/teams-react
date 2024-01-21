/** @format */
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.text}>Oops! Parece que te has perdido en el espacio.</p>
      <p style={styles.text}>La página que estás buscando no existe.</p>

      {/* Agrega un enlace a la página de inicio o a donde desees */}
      <Link to='/' style={styles.link}>
        Volver a la página de inicio
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  heading: {
    fontSize: '72px',
    color: '#e74c3c', // Puedes personalizar el color
  },
  text: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'underline',
    color: '#3498db', // Puedes personalizar el color
    fontSize: '20px',
  },
};

export default NotFound;
