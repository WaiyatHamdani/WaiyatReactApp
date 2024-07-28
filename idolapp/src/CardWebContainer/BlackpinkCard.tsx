import React from 'react'
import { blackpink } from '../Data/ListIdol';

function BlackpinkCard() {
  return (
    <div className="container">
      {blackpink.map((member, index) => (
        <div key={index} className='idol-card'>
          <img src={member.picture} alt={member.stageName} />
          <h2>{member.stageName}</h2>
          <p>{member.realName}</p>
          <p>Group: {member.group}</p>
          <p>Birthday: {member.birthday}</p>
        </div>
      ))}
    </div>
  );
}

export default BlackpinkCard
