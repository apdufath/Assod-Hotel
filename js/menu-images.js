/* =========================================================
   Assod Hotel — Real menu image mapping
   Source: Assod_Hotel_Menu_Images_Named.zip → assets/menu/
   ========================================================= */

window.AssodMenuImages = (function () {
  const BASE = "assets/menu/";

  const files = {
    englishBreakfast: BASE + "English_Breakfast.jpeg",
    assodSpecialBreakfast: BASE + "Assod_Special_Breakfast.jpeg",
    assodCombo: BASE + "Assod_Combo.jpeg",
    assodRolex: BASE + "Assod_Rolex.jpeg",
    frenchToast: BASE + "French_Toast.jpeg",
    breakfastExtra: BASE + "Breakfast_Extra_Photo.jpeg",
    salad: BASE + "Salad.jpeg",
    soup: BASE + "Soup.jpeg",
    fries: BASE + "Fries.jpeg",
    mukhbaza: BASE + "Mukhbaza.jpeg",
    specialSteak: BASE + "Assod_Special_Steak.jpeg",
    stirFriedBeef: BASE + "Stir_Fried_Beef.jpeg",
    grilledFish: BASE + "Grilled_Fish.jpeg",
    grilledChicken: BASE + "Grilled_Chicken.jpeg",
    sweetSourChicken: BASE + "Sweet_And_Sour_Chicken.jpeg",
    penneAlfredo: BASE + "Penne_Alfredo.jpeg",
    freshJuice: BASE + "Fresh_Juice.jpeg",
    milkshake: BASE + "Milkshake.jpeg",
    mojito: BASE + "Mojito.jpeg",
    somaliTea: BASE + "Somali_Tea.jpeg",
    coffee: BASE + "Coffee.jpeg",
    mixedFruits: BASE + "Mixed_Fruits.png",
    clubSandwich: BASE + "Assod_Club_Sandwich.jpeg",
    shuwarma: BASE + "Assod_Shuwarma.jpeg",
    pizza: BASE + "Assod_Pizza.jpeg",
    chickenCurry: BASE + "Chicken_Curry.jpeg",
    chickenMandi: BASE + "Chicken_Mandi.jpeg",
    chickenNuggets: BASE + "Chicken_Nuggets.jpeg",
    mixedWadani: BASE + "Mixed_Wadani.jpeg",
    blackForest: BASE + "Black_Forest_Cake.jpeg",
    cheeseCake: BASE + "Cheese_Cake.jpeg",
    redVelvet: BASE + "Red_Velvet_Cake.jpeg",
    donut: BASE + "Donut.jpeg",
    sambuza: BASE + "Sambuza.png",
    pastry: BASE + "Pastry_Roll.jpeg",
    outdoor: BASE + "Outdoor_Cafeteria.jpeg",
    building: BASE + "Assod_Hotel_Building.jpeg",
    roomService: BASE + "Room_Service_Bedroom.jpeg",
  };

  /* Exact dish name → image */
  const exact = {
    "English Breakfast": files.englishBreakfast,
    "Choice of Eggs": files.breakfastExtra,
    "Egg Benedict": files.breakfastExtra,
    "Assod Special Breakfast": files.assodSpecialBreakfast,
    "Assod Combo": files.assodCombo,
    "Goat Liver": files.assodCombo,
    "Camel Liver": files.assodCombo,
    Pancakes: files.frenchToast,
    "French Toast": files.frenchToast,
    "Suqaar Adhi": files.stirFriedBeef,
    "Suqaar Beef": files.stirFriedBeef,
    "Suqaar Fish": files.grilledFish,
    "Somali Laxoox": files.breakfastExtra,
    "Egg Shafayn": files.breakfastExtra,
    Cambaabur: files.breakfastExtra,
    Foul: files.breakfastExtra,
    Haricot: files.breakfastExtra,
    Waffles: files.frenchToast,
    "Corn Flakes": files.breakfastExtra,
    Malawax: files.breakfastExtra,
    Porridge: files.breakfastExtra,
    Beans: files.breakfastExtra,
    "Assod Rolex": files.assodRolex,

    "Caesar Salad": files.salad,
    "Tuna Salad": files.salad,
    "Chef’s Salad": files.salad,
    "Garden Salad": files.salad,
    "Chicken Salad": files.salad,
    "Vegetables Clear Soup": files.soup,
    "Fish Soup": files.soup,
    "Lentil Soup": files.soup,
    "Creamy Chicken Soup": files.soup,
    "Clear Chicken Soup": files.soup,
    "Cream of Mushroom Soup": files.soup,

    Vegetable: files.salad,
    Fries: files.fries,
    "Mashed Potato": files.fries,
    Chapati: files.pastry,

    Captain: files.mukhbaza,
    "Feta-timir": files.mukhbaza,
    "Feta-muus": files.mukhbaza,
    Macsub: files.mukhbaza,
    Ratab: files.mukhbaza,
    Hummus: files.mukhbaza,

    "Whole Fish": files.grilledFish,
    "Assod Special Steak": files.specialSteak,
    "Beef Steak": files.specialSteak,
    "Camel Steak": files.specialSteak,
    "Stir Fried Beef": files.stirFriedBeef,
    "Stir Fried Beef Rice": files.stirFriedBeef,
    "Grilled Fish": files.grilledFish,
    "Ugaali Beef": files.stirFriedBeef,
    "Creamy Spinach Fish Fillet": files.grilledFish,
    "Grilled Chicken": files.grilledChicken,
    "Assod Chicken Legs": files.grilledChicken,
    "Sweet and Sour Fish": files.sweetSourChicken,
    "Sweet and Sour Chicken": files.sweetSourChicken,
    "Chinese Fish": files.grilledFish,
    "Hanid Goat": files.stirFriedBeef,
    "Boiled Goat": files.stirFriedBeef,
    "Roasted Goat": files.stirFriedBeef,
    "Finger Fish": files.grilledFish,
    "Penne Alfredo": files.penneAlfredo,
    "Penne Arrabiata": files.penneAlfredo,
    "Spaghetti Bolognese": files.penneAlfredo,
    Spaghetti: files.penneAlfredo,
    Rice: files.chickenMandi,

    Orange: files.freshJuice,
    Watermelon: files.freshJuice,
    Papaya: files.freshJuice,
    Avocado: files.freshJuice,
    Mango: files.freshJuice,
    Cocktail: files.freshJuice,
    Lemonade: files.freshJuice,
    "Lemon with Mint": files.mojito,
    "Sweet Melon": files.freshJuice,
    "Assod Juice": files.freshJuice,
    "Banana Milk": files.milkshake,
    "Date Juice": files.freshJuice,
    "Strawberry Shake": files.milkshake,
    "Chocolate Shake": files.milkshake,
    "Vanilla Shake": files.milkshake,
    "Caramel Shake": files.milkshake,
    "Oreo Shake": files.milkshake,
    "Strawberry Mojito": files.mojito,
    "Blueberry Mojito": files.mojito,
    "Traditional Mojito": files.mojito,
    "Virgin Mojito": files.mojito,
    "Orange Mojito": files.mojito,
    "Passion Mojito": files.mojito,
    "Watermelon Mojito": files.mojito,
    "Vimto Mojito": files.mojito,
    "Strawberry Smoothie": files.milkshake,
    "Chocolate Smoothie": files.milkshake,
    "Mango Smoothie": files.milkshake,
    "Banana Smoothie": files.milkshake,
    "Avocado Smoothie": files.milkshake,
    "Tropical Smoothie": files.milkshake,

    "Somali Tea": files.somaliTea,
    "Assod Tea": files.somaliTea,
    "Black Tea": files.somaliTea,
    "Mint Tea": files.somaliTea,
    "Green Tea": files.somaliTea,
    "Karak Tea": files.somaliTea,
    "Dawo Tea": files.somaliTea,
    "Turmeric Tea": files.somaliTea,
    "Lemon Tea": files.somaliTea,
    "Mixed Fruits": files.mixedFruits,
    "Feta Papaya": files.mixedFruits,
    "Feta Xabxab": files.mixedFruits,
    "Assod Fruit": files.mixedFruits,
    "Small SBI": files.freshJuice,
    "Small Water": files.freshJuice,
    "Big Water": files.freshJuice,
    "Seven Up": files.freshJuice,
    Pepsi: files.freshJuice,
    "Iced Caramel Frappes": files.coffee,
    "Iced Frappuccino": files.coffee,
    "Iced Frappe Latte": files.coffee,
    Cappuccino: files.coffee,
    "Cafe Latte": files.coffee,
    Macchiato: files.coffee,
    Espresso: files.coffee,
    Americano: files.coffee,
    "Caramel Latte": files.coffee,
    "Coffee Mocha": files.coffee,

    "Classic Cheese Burger": files.clubSandwich,
    "California Smash Burger": files.clubSandwich,
    "Smash It Up": files.clubSandwich,
    "Crispy Chicken Burger": files.grilledChicken,
    "Fish Burger": files.grilledFish,
    "Bavarian Burger": files.clubSandwich,
    "Assod Shuwarma": files.shuwarma,
    "Beef Shuwarma": files.shuwarma,
    "Chicken Shuwarma": files.shuwarma,
    "Fish Shuwarma": files.shuwarma,
    "Vegetable Shuwarma": files.shuwarma,
    "Beef Quesadillas": files.clubSandwich,
    "Chicken Quesadillas": files.clubSandwich,
    "Fish Quesadillas": files.clubSandwich,
    "Vegetable Quesadillas": files.clubSandwich,
    "Beef Sandwich": files.clubSandwich,
    "Chicken Sandwich": files.clubSandwich,
    "Fish Sandwich": files.clubSandwich,
    "Assod Club Sandwich": files.clubSandwich,
    "Beef Cheese Sandwich": files.clubSandwich,
    "Tuna Sandwich": files.clubSandwich,
    "Egg Sandwich": files.clubSandwich,
    "Beef Pizza": files.pizza,
    "Chicken Pizza": files.pizza,
    "Tuna Pizza": files.pizza,
    "Fish Pizza": files.pizza,
    "Assod Pizza Mixed": files.pizza,
    "Margherita Pizza": files.pizza,
    "Hawaii Beef Pizza": files.pizza,

    "Mutton Curry": files.chickenCurry,
    "Chicken Curry": files.chickenCurry,
    "Fish Curry": files.chickenCurry,
    "Beef Curry": files.chickenCurry,
    "Vegetable Curry": files.chickenCurry,
    "Mutton Biryani": files.chickenMandi,
    "Fish Biryani": files.chickenMandi,
    "Chicken Biryani": files.chickenMandi,
    "Vegetable Biryani": files.chickenMandi,
    "Chicken Butter": files.chickenCurry,
    "Chicken Tikka": files.grilledChicken,
    "Chicken Tandoori": files.grilledChicken,
    "Mutton Tikka": files.stirFriedBeef,
    "Fish Tikka": files.grilledFish,
    "Goat Mandi": files.chickenMandi,
    "Fish Mandi": files.chickenMandi,
    "Chicken Mandi": files.chickenMandi,

    "Chicken Fingers": files.chickenNuggets,
    "Fish Fingers": files.grilledFish,
    "Chicken Nuggets": files.chickenNuggets,
    "Fish Nuggets": files.chickenNuggets,
    "Chips Masala": files.fries,
    "Kids Beef Suqaar": files.stirFriedBeef,
    "Kids Chicken Suqaar": files.grilledChicken,

    "Garow Beef Kalan": files.mixedWadani,
    "Garow Fish Kalan": files.mixedWadani,
    "Garow Chicken Kalan": files.mixedWadani,
    Garow: files.mixedWadani,
    Shuuro: files.soup,
    Heed: files.mixedWadani,
    Galley: files.mixedWadani,
    Digir: files.mixedWadani,
    "Mixed Wadani": files.mixedWadani,

    "Black Forest Cake": files.blackForest,
    "White Forest Cake": files.blackForest,
    "Cheese Cake": files.cheeseCake,
    "Tiramisu Cake": files.cheeseCake,
    "Red Velvet Cake": files.redVelvet,
    "Chocolate Cake": files.blackForest,
    "Caramel Cake": files.cheeseCake,
    "Strawberry Cake": files.redVelvet,
    "Dry Cake": files.pastry,
    Croissant: files.pastry,
    Donut: files.donut,
    Basbusa: files.pastry,
    Sambuza: files.sambuza,
  };

  const categoryDefaults = {
    breakfast: files.englishBreakfast,
    starters: files.salad,
    sides: files.fries,
    health: files.mukhbaza,
    mains: files.specialSteak,
    "pasta-rice": files.penneAlfredo,
    drinks: files.freshJuice,
    tea: files.somaliTea,
    coffee: files.coffee,
    "soft-drinks": files.freshJuice,
    fruits: files.mixedFruits,
    frappe: files.coffee,
    "fast-foods": files.pizza,
    asian: files.chickenCurry,
    mandi: files.chickenMandi,
    kids: files.chickenNuggets,
    wadani: files.mixedWadani,
    desserts: files.blackForest,
  };

  function resolve(item, category) {
    if (item && item.image && String(item.image).indexOf("assets/menu/") === 0) {
      return item.image;
    }
    if (item && exact[item.name]) return exact[item.name];

    const name = ((item && item.name) || "").toLowerCase();
    const sub = ((item && item.subcategory) || "").toLowerCase();
    const catId = (category && category.id) || "";

    if (name.includes("salad") || sub === "salads") return files.salad;
    if (name.includes("soup") || sub === "soups") return files.soup;
    if (name.includes("mojito")) return files.mojito;
    if (name.includes("shake") || name.includes("smoothie")) return files.milkshake;
    if (name.includes("juice") || name.includes("lemonade")) return files.freshJuice;
    if (name.includes("tea")) return files.somaliTea;
    if (name.includes("coffee") || name.includes("latte") || name.includes("cappuccino") || name.includes("espresso") || name.includes("americano") || name.includes("mocha") || name.includes("frappe")) {
      return files.coffee;
    }
    if (name.includes("pizza")) return files.pizza;
    if (name.includes("shuwarma") || name.includes("shawarma")) return files.shuwarma;
    if (name.includes("sandwich") || name.includes("burger") || name.includes("quesadilla")) return files.clubSandwich;
    if (name.includes("mandi") || name.includes("biryani")) return files.chickenMandi;
    if (name.includes("curry") || name.includes("butter")) return files.chickenCurry;
    if (name.includes("fish")) return files.grilledFish;
    if (name.includes("chicken")) return files.grilledChicken;
    if (name.includes("beef") || name.includes("steak") || name.includes("goat") || name.includes("mutton") || name.includes("suqaar")) {
      return files.stirFriedBeef;
    }
    if (name.includes("cake") || name.includes("tiramisu")) return files.blackForest;
    if (name.includes("donut")) return files.donut;
    if (name.includes("sambuza")) return files.sambuza;
    if (name.includes("fries") || name.includes("chips")) return files.fries;
    if (name.includes("nugget") || name.includes("finger")) return files.chickenNuggets;
    if (name.includes("fruit")) return files.mixedFruits;
    if (name.includes("pasta") || name.includes("penne") || name.includes("spaghetti") || name.includes("alfredo")) {
      return files.penneAlfredo;
    }

    if (categoryDefaults[catId]) return categoryDefaults[catId];
    return files.outdoor;
  }

  return { files, exact, categoryDefaults, resolve };
})();
