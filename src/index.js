module.exports = function zeros(expression) {
  let arrayFactorials = expression.split('*'),
      countFive = 0,
      countTwo = 0;
  arrayFactorials.forEach(element => {
    let number = Number.parseInt(element),
        even = 1,
        add = 1;
    element.includes('!!') && (even = (number % 2) == 0 ? 2 : 1) && (add = 2);
    for(let i = even; i <= number; i+=add){
      countFive += countOfDrivers(i, 5);
      countTwo += countOfDrivers(i, 2);
    }  
  });
  return countFive <= countTwo ? countFive : countTwo;  
}

function countOfDrivers(number, driver){
  let count = 0;
  while(number % driver == 0){
    number /= driver;
    count++;
  }
  return count;
}