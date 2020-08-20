function bind(context, fn) {
  return function() {
    if( Array.isArray(arguments[0]) ) {
      fn.apply(context, ...arguments)
    } else {
      fn.apply(context, arguments); // or fn.call(context, ...arguments);
    }
  }
}

const person1 = {
  name: 'Alexander',
  age: 26,
  job: 'Frontend'
}

const person2 = {
  name: 'Kristi',
  age: 29,
  job: 'Cook'
}

function logPerson(parameter1, parameter2, parameter3) {
  console.log(`
    Person: ${this.name}. 
    Age: ${this.age}. 
    Job: ${this.job}. 
    Parametr 1: ${parameter1}.
    Paremetr 2: ${parameter2}. 
    Parametr 3: ${parameter3}.
    `);
}

bind(person1, logPerson)(['bind 1', 1, 1]);
bind(person2, logPerson)('bind 2', 2, 2);
