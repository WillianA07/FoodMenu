
"use strict";

let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea",
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries",
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies",
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw",
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = function() {
    menuItems.style.display = "none";
    document.getElementById("menu").onchange = onMenuItemSelectChange;
}

function onMenuItemSelectChange() {
    const menuList = document.getElementById("menu");
    const menuItems = document.getElementById("menuItems");

    let selectedValue = menuList.value;
    let drinksLength = (menu.drinks).length;
    let entreesLength = (menu.entrees).length;
    let dessertsLength = (menu.desserts).length;

    menuItems.length = 0;

    if (selectedValue == "") {
        menuItems.style.display = "none";
    }
    else if (selectedValue == "drinks") {
        menuItems.style.display = "block";
        for (let i = 0; i < drinksLength; i++) {
            let drinks = document.createElement("option");
 
            drinks.value = "drinksItems";
            drinks.text = menu.drinks[i];
                
            menuItems.appendChild(drinks);   
        }
    }
    else if (selectedValue == "entrees") {
        menuItems.style.display = "block";
        for (let e = 0; e < entreesLength; e++) {
            let entrees = document.createElement("option");

            entrees.value = "entreeItems";
            entrees.text = menu.entrees[e];

            menuItems.appendChild(entrees);
        }
    }
    else if (selectedValue == "desserts") {
        menuItems.style.display = "block";
        for (let d = 0; d < dessertsLength; d++) {
            let desserts = document.createElement("option");

            desserts.value = "dessertItems";
            desserts.text = menu.desserts[d];

            menuItems.appendChild(desserts);
        }
    }
}