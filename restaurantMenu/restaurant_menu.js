const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Convert breakfast menu array items into HTML string using map()
const breakfastMenuHTMLItems = breakfastMenu.map((item, index) => `<p> Item ${index + 1}: ${item} </p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHTMLItems;

// Traverse main course menu array using forEach array method
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p> Item ${index + 1}: ${item} </p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Iterate dessert menu array using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p> Item ${i + 1}: ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;