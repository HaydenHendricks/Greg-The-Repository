//Constructors
function Food(size, name, calorie, carb, protein, fat){
    this.size = size;
    this.name = name;
    this.calorie = calorie;
    this.carb = carb;
    this.protein = protein;
    this.fat = fat;
};

function Meal(food, calorie, carb, protein, fat){
    this.food = food;
    this.calorie = calorie;
    this.carb = carb;
    this.protein = protein;
    this.fat = fat;
}

//Foods: size, name, kcal, carb, protein, fat
var orangeJuice = new Food('8 fl oz', 'Orange Juice', 110, 26, 2, 0);
var milk = new Food('1 cup','Milk', 149, 11.7, 7.7, 8);
var almondMilk = new Food('1 cup', 'Almond Milk', 80, 14, 1, 2.5);
var oreoYogurt = new Food('1 Pack', 'Oreo Yogurt', 170, 30, 5, 3.5);
var colbyJack = new Food('1 inch^3', 'Colby Jack Cheese', 110, 1, 7, 9); 
var creamCheese = new Food('2 tbsp', 'Cream Cheese', 50, 2, 1, 4.5);
var oatmeal = new Food('1/2 cup', 'Oatmeal', 150, 27, 5, 2.5);
var cheerios = new Food('1 cup', 'Cheerios', 100, 21, 4, 2);
var bread = new Food('1 slice','White Bread', 60, 12, 2, 1);
var bagel = new Food('1', 'Bagel', 270, 50, 9, 3);
var ramen = new Food('1 pack', 'Chicken Ramen', 380, 53, 9, 14);
var butter = new Food('1 tbsp', 'Butter', 100, 0, 0, 11);
var peanutButter = new Food('2 tbsp', 'Peanut Butter', 180, 5, 8, 16);
var jam = new Food('1 tbsp', 'Jam', 50, 130, 0, 0);
var syrup = new Food('2 tbsp', 'Real Maple Syrup', 110, 26, 0, 0);
var orange = new Food('1 whole', 'Orange', 60, 15.4, 1, 0);
var apple = new Food('1 whole', 'Apple', 55, 11.8, 0.4, 0.1);

//Dieting Meals
var MealOne = new Meal(
    ['1', bagel.name, ', 3 cups', milk.name].join(' '),
    bagel.calorie + (3 * milk.calorie),
    bagel.carb + (3 * milk.carb),
    bagel.protein + (3 * milk.protein),
    bagel.fat + (3 * milk.fat)
);

var MealTwo = new Meal(
    ['2 cups', cheerios.name, ', 1 tbsp', creamCheese.name, ', 1 cup', almondMilk.name, ', 2 cup', milk.name, ', 1', orange.name].join(' '),
    (2 * cheerios.calorie) + (0.5 * creamCheese.calorie) + almondMilk.calorie + (2 * milk.calorie) + orange.calorie,
    (2 * cheerios.carb) + (0.5 * creamCheese.carb) + almondMilk.carb + (2 * milk.carb) + orange.carb,
    (2 * cheerios.protein) + (0.5 * creamCheese.protein) + almondMilk.protein + (2 * milk.protein) + orange.protein,
    (2 * cheerios.fat) + (0.5 * creamCheese.fat) + almondMilk.fat + (2 * milk.fat) + orange.fat,
);

var MealThree = new Meal(
    ['1 cup', almondMilk.name, ', 1 cup', oatmeal.name, ', 2 tbsp', peanutButter.name, ', 1 tbsp', creamCheese.name].join(' '),
    (2 * oatmeal.calorie) + (0.5 * creamCheese.calorie) + almondMilk.calorie + peanutButter.calorie,
    (2 * oatmeal.carb) + (0.5 * creamCheese.carb) + almondMilk.carb + peanutButter.carb,
    (2 * oatmeal.protein) + (0.5 * creamCheese.protein) + almondMilk.protein + peanutButter.protein,
    (2 * oatmeal.fat) + (0.5 * creamCheese.fat) + almondMilk.fat + peanutButter.fat,
);

var MealFour = new Meal(
    [('2 cups', milk.name, ', 2 cup', almondMilk.name, ', 2 tbsp', jam.name)].join(' '),
    (2 * milk.calorie) + (2 * almondMilk.calorie) + (2 * jam.calorie),
    (2 * milk.carb) + (2 * almondMilk.carb) + (2 * jam.carb),
    (2 * milk.protein) + (2 * almondMilk.protein) + (2 * jam.protein),
    (2 * milk.fat) + (2 * almondMilk.fat) + (2 * jam.fat),
)

//Goal
var Goal = {
    calorie: 1588,
    carb: 194,
    protein: 77,
    fat: 51
};


//Tracker
var today = {
    calorie: apple.calorie + almondMilk.calorie,
    carb: apple.carb + almondMilk.carb,
    protein: apple.protein + almondMilk.protein,
    fat: apple.fat + almondMilk.fat,
};

//Output
function Goals(){
    document.getElementById("GEat").innerHTML = 'Your Goal Intakes For Today Were:';
    document.getElementById("GCal").innerHTML = (['Calories:', Goal.calorie, 'kcal'].join(' '));
    document.getElementById("GCarb").innerHTML = (['Carbs:', Goal.carb, 'g'].join(' '));
    document.getElementById("GProtein").innerHTML = (['Protein:', Goal.protein, 'g'].join(' '));
    document.getElementById("GFat").innerHTML = (['Fat:', Goal.fat, 'g'].join(' '));
};

function Total(){
    document.getElementById("EEaten").innerHTML = 'Your Total Intakes Today Were:';
    document.getElementById("ECal").innerHTML = (['Calories:', Math.round(today.calorie * 100 + Number.EPSILON ) / 100, 'kcals'].join(' '));
    document.getElementById("ECarb").innerHTML = (['Carbohydrates:', Math.round(today.carb * 100 + Number.EPSILON ) / 100, 'g'].join(' '));
    document.getElementById("EProtein").innerHTML = (['Protein:', Math.round(today.protein * 100 + Number.EPSILON ) / 100, 'g'].join(' '));
    document.getElementById("EFat").innerHTML = (['Fat:', Math.round(today.fat * 100 + Number.EPSILON ) / 100, 'g'].join(' '));
 };
Goals();
Total();