/** @format */
// Elimina el import de React si no lo estás utilizando en este componente

import femaleCard from '../imagenes/femaleProfile.jpg';
import maleCard from '../imagenes/maleProfile.jpg';

const Employees = (props) => {
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <select
            className='form-select form-select-lg'
            value={props.selectedTeam}
            onChange={props.handleTeamSelectionChange}>
            <option value='teamA'>teamA</option>
            <option value='teamB'>teamB</option>
            <option value='teamC'>teamC</option>
            <option value='teamD'>teamD</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {props.employees.map((employee) => {
              return (
                <div
                  key={employee.id}
                  id={employee.id}
                  className={
                    employee.teamName === props.selectedTeam
                      ? 'card m-2 standout'
                      : 'card m-2'
                  }
                  style={{ cursor: 'pointer' }}
                  onClick={props.handleEmployeeCardClick}>
                  <img
                    src={employee.gender === 'Femenino' ? femaleCard : maleCard}
                    className='card-img-top img-fluid' // Agregar la clase img-fluid aquí
                    alt={`foto de ${employee.fullName}`}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>
                      Full Name: {employee.fullName}
                    </h5>
                    <p className='card-text'>
                      <b>Designation: </b>
                      {employee.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
