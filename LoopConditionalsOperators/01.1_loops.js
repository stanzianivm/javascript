// Review loops
// while
// do while
// for

var i = 0;
while (i < 5){
    console.log('This counter has run ' + (i + 1) + 'times');
}

var counter = 5;

 do{
    console.log('loop ran even with false expression');
    counter ++;
 } while (counter < 5);


 var numbers = [1, 2, 3, 4, 5, 20, 30];
 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10){
      console.log('El número ' + numbers[i] + ' es mayor a 10');
    } else {
      console.log('El número ' + numbers[i] + ' es menor que 10');
    }
 }