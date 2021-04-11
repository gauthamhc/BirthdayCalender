import React from "react";

const List = ({ people }) => {
  return people.map((person) => {
    return (
      <article className="list">
        <img className="person-image" src={person.image} alt={person.name} />
        <div className="list-details">
          <h2 className="birthday-name">{person.name}</h2>
          <p>{person.age}</p>
        </div>
      </article>
    );
  });
};

export default List;
