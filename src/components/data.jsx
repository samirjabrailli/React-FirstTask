import React, { useState } from 'react';

// Sample data
const data = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image: 'https://www.course-api.com/images/people/person-5.jpeg',
  },
];

const BirthdayList = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <h2>{people.length} Birthdays Today</h2>
      {people.map((person) => {
        return (
          <div key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
};

export default BirthdayList;
