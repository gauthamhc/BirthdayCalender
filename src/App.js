import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearAllHandler = () => {
    setPeople([]);
  };
  const setPeopleHandler = () => {
    setPeople(data);
  };

  if (people.length === 0) {
    return (
      <div className="container">
        <button className="btn btn-refresh" onClick={setPeopleHandler}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <section className="container">
        <h2>{people.length} Birthday Reminders</h2>
        <List key={people.id} people={people} />
        <button className="btn" onClick={clearAllHandler}>
          Clear all
        </button>
      </section>
    </>
  );
}

export default App;
