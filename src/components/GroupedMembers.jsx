/** @format */
import { useState } from 'react';
const GroupedMembers = ({ employees, selectedTeam, setTeam }) => {
  const groupedTeamMembers = () => {
    const teams = ['teamA', 'teamB', 'teamC', 'teamD'];
    return teams.map((team) => ({
      team: team,
      members: employees.filter((employee) => employee.teamName === team),
      collapsed: selectedTeam === team ? false : true,
    }));
  };
  const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers());

  function handleTeamClick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className='container'>
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className='card mt-2'
            style={{ cursor: 'pointer' }}>
            <h4
              id={item.team}
              className='card-header text-secondary bg-white'
              onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div
              id={'collapse_' + item.team}
              className={item.collapsed === true ? 'collapse' : ''}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div key={member.id} className='mt-2'>
                    <h5 className='card-title mt-2'>
                      <span className='text-dark'>
                        <b>Full Name:</b> {member.fullName}
                      </span>
                    </h5>
                    <p className='card-text text-dark mt-2'>
                      <b>Designation:</b> {member.designation}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  );
};

export default GroupedMembers;
