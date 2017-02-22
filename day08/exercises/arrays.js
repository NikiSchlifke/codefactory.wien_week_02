var words = ["Tesla", "BWM", "Renault", "Volvo", "Mazda", "Fiat", "Ferari"];
document.write(words.sort() + '<br>');

var fruits = ["apple", "banana", "kiwi"];
document.write(fruits + "<br>");

fruits.push("orange");
document.write(fruits + "<br>");


var popped_value = fruits.pop();
console.log("popped value: " + popped_value);

document.write(fruits + "<br>");

var fruit_string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
fruits = fruit_string.split("/");
var new_fruit_string = fruits.join("<br>");

document.write(new_fruit_string + "<br>");

