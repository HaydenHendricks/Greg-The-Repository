

let animal = {
    name: "Lupine",
    numLegs: 3,
    sayName: function(){
        return "The name of this animal is " + this.name + ".";
    },
    sayLegs: function(){
        return "This animal has " + this.numlegs + " leg(s).";
    },
};
console.log(animal.sayName());
console.log(animal.sayLegs());

document.getElementById("animalName").innerHTML = "This animals name is " + animal.name + ".";
document.getElementById("animalLegs").innerHTML = "This animal has " + animal.numLegs + " leg(s).";

//made a mistake then got distracted and now there is a cliker
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value+=1;
    document.getElementById('number').value = value;
}