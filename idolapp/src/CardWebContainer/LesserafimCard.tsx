import React from 'react'
import { lesserafim } from '../Data/ListIdol'

function LesserafimCard() {
  return(
  <div className="container">
      {lesserafim.map((member, index) => (
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

export default LesserafimCard
