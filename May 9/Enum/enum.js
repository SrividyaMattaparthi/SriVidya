var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Mango"] = 1] = "Mango";
    Fruits[Fruits["Orange"] = 2] = "Orange";
    Fruits[Fruits["Grapes"] = 3] = "Grapes";
})(Fruits || (Fruits = {}));
;
var fruit = Fruits.Apple;
console.log(Fruits);
console.log(fruit);
console.log(Fruits[1]);
