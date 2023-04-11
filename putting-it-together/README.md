# Core Assignment "Putting It Together"

This is Christian Johnson's work for Coding Dojo's Part-Time Accelerated MERN Stack.
It was submitted on April 10, 2023.

## Assignment description

This is a React application that renders a list of `ProfileCard` components for each person object in the `people` array, which is defined on the parent `App` component. Each `ProfileCard` component displays the person's name, age, and hair color, and has buttons to increase or decrease the person's age. The `person.hairColor` property is passed to a new dynamic variable `actualHairColor` that mutates based on the piece of state `year`.

```let actualHairColor;
  if (year > 75) {
    actualHairColor = "White";
  } else if (year > 50) {
    actualHairColor = "Greyish-" + person.hairColor.toLowerCase();
  } else {
    actualHairColor = person.hairColor;
  }
```
