// 1
console.log(hello);                                   
var hello = 'world';                                 

//Interpreter:
// var hello;
// console.log(hello);
// hello = 'world';
//Correct
//Output: undefined
//Correct


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}                             

//Interpreter:
// var needle;
// needle = 'haystack';
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// } 
// test();
//Correct
// Output: magnet
//Correct


// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);                  

//Interpreter:
// var brendan;
// brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
//Correct
//Output: super cool
//Correct


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//Interpreter:
// var food;
// food = 'chicken';
// console.log(food);
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// eat();
//Correct
//Output: chicken
//        half-chicken
//Correct

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Interpreter:
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// mean();
// console.log(food);
// console.log(food);
// Correct
//Output: Error mean()is not a function;
//Correct

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Interpreter:
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
// Correct
// Output: undefined
//         rock
//         r&b
//         disco
// Correct

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Interpreter:
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
//Correct
// Output: san jose
//         seattle
//         burbank
//         san jose
// Correct


//8 Bonus ES6:const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//Interpreter:
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// Correct
//Output: Error: assignment to constant varible
//Correct