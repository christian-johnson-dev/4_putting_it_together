import { useState } from "react";

function ProfileCard({ person }) {
  const [year, setYear] = useState(person.age);

  const handleClickPlus = () => {
    setYear(year + 1);
  };

  const handleClickMinus = () => {
    setYear(year - 1);
  };

  let actualHairColor;
  if (year > 75) {
    actualHairColor = "White";
  } else if (year > 50) {
    actualHairColor = "Greyish-" + person.hairColor.toLowerCase();
  } else {
    actualHairColor = person.hairColor;
  }

  return (
    <div className="card">
      <h2>
        {person.lastName}, {person.firstName}
      </h2>
      <p>Age: {year}</p>
      <p>Hair Color: {actualHairColor}</p>
      <button onClick={handleClickPlus}>{person.firstName} get's older.</button>
      <button onClick={handleClickMinus}>
        {person.firstName} get's younger.
      </button>
    </div>
  );
}
export default ProfileCard;
