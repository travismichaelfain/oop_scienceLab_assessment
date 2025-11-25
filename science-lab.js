/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

function participant(name, age, studyField) {
  return { name, age, studyField };
}

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

function participant(name, age, studyField) {
  return {
    name,
    age,
    studyField,
    displayInfo() {
      console.log(
        `Name: ${this.name} Age: ${this.age} Field of Study: ${this.studyField}`
      );
    },
  };
}

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
function participant(name, age, studyField) {
  return {
    name,
    age,
    studyField,
    displayInfo = () => {
      console.log(
        `Name: ${this.name} Age: ${this.age} Field of Study: ${this.studyField}`
      );
    },
  };
}

/*
 * Observations:
 * TODO: Explain here. When trying to use The arrow function's .this inherits this from the outer participant function, which is global, causing it to lose its connection to the object instance. This casues the properties to print out as undefined. 
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(propName, value, participant){
  return {...participant,
    [propName]: value
  }
}