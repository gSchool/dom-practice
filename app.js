// create a new div with the contents of each value in the things array
// append the div to main
const things = ["hi", "bye", "hola", "adios", "sup"];
const main = document.querySelector('main');

// create a variable for the h1
const greet = document.querySelector('h1');

// for loop or forEach
// for (var i = 0; i < things.length; i++) {
//   (function() {
//     var thing = things[i];
//     // document.createElement
//     var div = document.createElement('div');
//     // element.textContent
//     div.textContent = thing;
//     // element.appendChild
//     main.appendChild(div);
//     // add a click event listener that alerts the contents of the div
//     div.addEventListener('click', function() {
//       alert(thing);
//     });
//   })();
// }

things.forEach(function(thing) {
  // document.createElement
  var div = document.createElement('div');
  // element.textContent
  div.textContent = thing;
  // element.appendChild
  main.appendChild(div);
  // add a click event listener that alerts the contents of the div
  div.addEventListener('click', function() {
    // alert(thing);
    // set the h1 text contents to be the thing
    greet.textContent = thing;
  });
});
