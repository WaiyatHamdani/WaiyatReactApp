import React from 'react'
import { ive } from '../Data/ListIdol';

function IveCard() {
  return (
    <div className="container">
      {ive.map((member, index) => (
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

export default IveCard
