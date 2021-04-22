// QUESTION #1
// Proposed solution during interview

let numberArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

(function questionOne(numberArray) {
    let doubleDimensionArray = [];
    for(let j =0; j< numberArray.length; j=j+5) {
        doubleDimensionArray.push(numberArray.slice(j, j+2));
        doubleDimensionArray.push(numberArray.slice(j+2, j+5));
    }
    // console.log('Question #1 Result', doubleDimensionArray);
})(numberArray);


/* 
Question #2
Login - Logout tracking of employees
Group object values on basis of date
*/
originalObject = [
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'December 15, 2017',
    time_in: '11:56:34',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'January 05, 2016',
    time_in: '11:25:13',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'January 05, 2016',
    time_out: '19:06:22',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'December 15, 2017',
    time_out: '19:00:37',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'July 23, 2020',
    time_out: '19:06:22',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'July 24, 2020',
    time_in: '11:15:41',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'July 24, 2020',
    time_out: '19:06:22',
  },
  {
    employee_number: '400',
    employee_name: 'Punit',
    date: 'July 23, 2020',
    time_in: '10:09:52',
  },
];

(function questionTwo(originalObject) {
  mutatedObject = [];
  originalObject
    .sort((a, b) => {
      let da = new Date(a.date),
        db = new Date(b.date);
      return da - db;
    })
    .forEach((a, index) => {
      if (index % 2 === 0) {
        mutatedObject.push({ ...a, ...originalObject[index + 1] });
      }
    });
  console.log('Question #2 - Result', mutatedObject);
})(originalObject);