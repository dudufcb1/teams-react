/** @format */
import './App.css';
import React, { useState, useEffect } from 'react';
import Employees from './components/Employees';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import GroupedMembers from './components/GroupedMembers';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'teamB'
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeesList')) || [
      {
        id: 1,
        fullName: 'María García',
        designation: 'Analista de Negocios',
        gender: 'Femenino',
        teamName: 'teamA',
      },
      {
        id: 2,
        fullName: 'Juan Pérez',
        designation: 'Desarrollador Web',
        gender: 'Masculino',
        teamName: 'teamB',
      },
      {
        id: 3,
        fullName: 'Ana López',
        designation: 'Diseñadora Gráfica',
        gender: 'Femenino',
        teamName: 'teamC',
      },
      {
        id: 4,
        fullName: 'Carlos Rodríguez',
        designation: 'Gerente de Proyectos',
        gender: 'Masculino',
        teamName: 'teamD',
      },
      {
        id: 5,
        fullName: 'Laura Martínez',
        designation: 'Especialista en Marketing',
        gender: 'Femenino',
        teamName: 'teamA',
      },
      {
        id: 6,
        fullName: 'Pedro Sánchez',
        designation: 'Analista de Datos',
        gender: 'Masculino',
        teamName: 'teamB',
      },
      {
        id: 7,
        fullName: 'Isabel Torres',
        designation: 'Ingeniera de Software',
        gender: 'Femenino',
        teamName: 'teamC',
      },
      {
        id: 8,
        fullName: 'Miguel Ramírez',
        designation: 'Analista Financiero',
        gender: 'Masculino',
        teamName: 'teamD',
      },
      {
        id: 9,
        fullName: 'Carmen Gómez',
        designation: 'Especialista en Recursos Humanos',
        gender: 'Femenino',
        teamName: 'teamA',
      },
      {
        id: 10,
        fullName: 'Javier Cruz',
        designation: 'Analista de Sistemas',
        gender: 'Masculino',
        teamName: 'teamB',
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const handleTeamSelectionChange = (e) => {
    setTeam(e.target.value);
  };

  const handleEmployeeCardClick = (e) => {
    const transformedEmployees = employees.map((employee) => {
      if (employee.id === parseInt(e.currentTarget.id)) {
        if (employee.teamName === selectedTeam) {
          return { ...employee, teamName: '' };
        } else {
          return { ...employee, teamName: selectedTeam };
        }
      } else {
        return employee;
      }
    });
    setEmployees(transformedEmployees);
  };
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path='/'
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }
          />
          <Route
            path='GroupedTeamMembers'
            element={
              <GroupedMembers
                employees={employees}
                selectedTeam={selectedTeam}
                setTeam={setTeam}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
