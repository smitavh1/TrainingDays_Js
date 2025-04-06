// The scope of `random` is too loose 
let name;

const getRandsEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = ssEvent => {
let days;
  if (sEvent === 'Marathon') {
     days = 50;
  } else if (sEvent === 'Triathlon') {
     days = 100;
  } else if (sEvent === 'Pentathlon') {
     days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logsEvent = (name) => {
  // name = 'Nala';
  console.log(`${name}'s sEvent is: ${sEvent}`);
};

const logTime = (name) => {
 //  name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const sEvent = getRandsEvent();
const days = getTrainingDays(sEvent);
// Define a `name` variable. Use it as an argument after updating logsEvent and logTime 

logsEvent('Smita','sEvent');
logTime('Smita','days');


