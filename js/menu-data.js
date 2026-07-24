/* =========================================================
   Assod Hotel — Restaurant Menu Data
   Source: Assod Hotel menu.pdf (names & prices)
   Images: assets/menu/
   Categories split for category-card Menu UX.
   Replace with fetch('/api/menu') later.
   ========================================================= */

window.AssodMenu = {
  "currency": "USD",
  "updatedFrom": "Assod Hotel Restaurant & Coffee Shop Menu",
  "images": {
    "englishBreakfast": "assets/menu/English_Breakfast.jpeg",
    "assodSpecialBreakfast": "assets/menu/Assod_Special_Breakfast.jpeg",
    "assodCombo": "assets/menu/Assod_Combo.jpeg",
    "assodRolex": "assets/menu/Assod_Rolex.jpeg",
    "frenchToast": "assets/menu/French_Toast.jpeg",
    "breakfastExtra": "assets/menu/Breakfast_Extra_Photo.jpeg",
    "salad": "assets/menu/Salad.jpeg",
    "soup": "assets/menu/Soup.jpeg",
    "fries": "assets/menu/Fries.jpeg",
    "mukhbaza": "assets/menu/Mukhbaza.jpeg",
    "specialSteak": "assets/menu/Assod_Special_Steak.jpeg",
    "stirFriedBeef": "assets/menu/Stir_Fried_Beef.jpeg",
    "grilledFish": "assets/menu/Grilled_Fish.jpeg",
    "grilledChicken": "assets/menu/Grilled_Chicken.jpeg",
    "sweetSourChicken": "assets/menu/Sweet_And_Sour_Chicken.jpeg",
    "penneAlfredo": "assets/menu/Penne_Alfredo.jpeg",
    "freshJuice": "assets/menu/Fresh_Juice.jpeg",
    "milkshake": "assets/menu/Milkshake.jpeg",
    "mojito": "assets/menu/Mojito.jpeg",
    "somaliTea": "assets/menu/Somali_Tea.jpeg",
    "coffee": "assets/menu/Coffee.jpeg",
    "mixedFruits": "assets/menu/Mixed_Fruits.png",
    "clubSandwich": "assets/menu/Assod_Club_Sandwich.jpeg",
    "shuwarma": "assets/menu/Assod_Shuwarma.jpeg",
    "pizza": "assets/menu/Assod_Pizza.jpeg",
    "chickenCurry": "assets/menu/Chicken_Curry.jpeg",
    "chickenMandi": "assets/menu/Chicken_Mandi.jpeg",
    "chickenNuggets": "assets/menu/Chicken_Nuggets.jpeg",
    "mixedWadani": "assets/menu/Mixed_Wadani.jpeg",
    "blackForest": "assets/menu/Black_Forest_Cake.jpeg",
    "cheeseCake": "assets/menu/Cheese_Cake.jpeg",
    "redVelvet": "assets/menu/Red_Velvet_Cake.jpeg",
    "donut": "assets/menu/Donut.jpeg",
    "sambuza": "assets/menu/Sambuza.png",
    "pastry": "assets/menu/Pastry_Roll.jpeg",
    "outdoor": "assets/menu/Outdoor_Cafeteria.jpeg",
    "building": "assets/menu/Assod_Hotel_Building.jpeg",
    "roomService": "assets/menu/Room_Service_Bedroom.jpeg"
  },
  "categories": [
    {
      "id": "breakfast",
      "name": "Breakfast",
      "description": "Morning classics, Assod specialties, and Somali breakfast favorites.",
      "image": "assets/menu/English_Breakfast.jpeg",
      "items": [
        {
          "name": "English Breakfast",
          "description": "A delicious English breakfast served with eggs, pancakes, baked beans, beef strips, fresh fruits, home fries, and a cup of tea.",
          "image": "assets/menu/English_Breakfast.jpeg",
          "price": 8
        },
        {
          "name": "Choice of Eggs",
          "description": "Prepared your way — omelet, boiled, fried, scrambled, or poached.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 4
        },
        {
          "name": "Egg Benedict",
          "description": "Poached eggs topped with hollandaise sauce and toasted bread.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 5
        },
        {
          "name": "Assod Special Breakfast",
          "description": "Suqaar, liver, malawax, scrambled eggs, sausage beef, and bread.",
          "image": "assets/menu/Assod_Special_Breakfast.jpeg",
          "price": 8
        },
        {
          "name": "Assod Combo",
          "description": "Goat liver, fried eggs, and toasted bread — a hearty Assod favorite.",
          "image": "assets/menu/Assod_Combo.jpeg",
          "price": 7
        },
        {
          "name": "Goat Liver",
          "description": "Tender goat liver cooked to perfection and served hot.",
          "image": "assets/menu/Assod_Combo.jpeg",
          "price": 5
        },
        {
          "name": "Camel Liver",
          "description": "Rich camel liver prepared in the Assod kitchen style.",
          "image": "assets/menu/Assod_Combo.jpeg",
          "price": 5
        },
        {
          "name": "Pancakes",
          "description": "Soft golden pancakes, ideal for a sweet morning start.",
          "image": "assets/menu/French_Toast.jpeg",
          "price": 4
        },
        {
          "name": "French Toast",
          "description": "Golden French toast with a light, comforting finish.",
          "image": "assets/menu/French_Toast.jpeg",
          "price": 5
        },
        {
          "name": "Suqaar Adhi",
          "description": "Classic goat suqaar, seasoned and served for a satisfying breakfast.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 6
        },
        {
          "name": "Suqaar Beef",
          "description": "Finely chopped beef suqaar cooked with aromatic spices.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 5
        },
        {
          "name": "Suqaar Fish",
          "description": "Light fish suqaar prepared fresh for a flavorful morning meal.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 5
        },
        {
          "name": "Somali Laxoox",
          "description": "Traditional Somali laxoox — soft, spongy, and freshly made.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3
        },
        {
          "name": "Egg Shafayn",
          "description": "A savory egg shafayn preparation, perfect with bread.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 4
        },
        {
          "name": "Cambaabur",
          "description": "Traditional cambaabur with authentic regional flavor.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 4
        },
        {
          "name": "Foul",
          "description": "Warm foul beans seasoned and served for a wholesome breakfast.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3.5
        },
        {
          "name": "Haricot",
          "description": "Tender haricot beans prepared in a comforting savory style.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3.5
        },
        {
          "name": "Waffles",
          "description": "Crisp waffles served warm for a delightful breakfast treat.",
          "image": "assets/menu/French_Toast.jpeg",
          "price": 5
        },
        {
          "name": "Corn Flakes",
          "description": "Classic corn flakes served with milk for a light start.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3
        },
        {
          "name": "Malawax",
          "description": "Soft Somali malawax, lightly cooked and ready to enjoy.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 4
        },
        {
          "name": "Porridge",
          "description": "Warm, comforting porridge prepared fresh each morning.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3
        },
        {
          "name": "Beans",
          "description": "Hearty breakfast beans cooked until soft and flavorful.",
          "image": "assets/menu/Breakfast_Extra_Photo.jpeg",
          "price": 3.5
        },
        {
          "name": "Assod Rolex",
          "description": "Chapati wrapped with eggs of choice and beef or chicken.",
          "image": "assets/menu/Assod_Rolex.jpeg",
          "price": 6
        }
      ]
    },
    {
      "id": "starters",
      "name": "Starters",
      "description": "Fresh salads and comforting soups to begin your meal.",
      "image": "assets/menu/Salad.jpeg",
      "items": [
        {
          "name": "Caesar Salad",
          "description": "Crisp greens with Caesar dressing and a classic finish.",
          "image": "assets/menu/Salad.jpeg",
          "price": 5,
          "subcategory": "Salads"
        },
        {
          "name": "Tuna Salad",
          "description": "Fresh salad topped with tender tuna for a light starter.",
          "image": "assets/menu/Salad.jpeg",
          "price": 6,
          "subcategory": "Salads"
        },
        {
          "name": "Chef’s Salad",
          "description": "A colorful chef’s salad with premium mixed toppings.",
          "image": "assets/menu/Salad.jpeg",
          "price": 6,
          "subcategory": "Salads"
        },
        {
          "name": "Garden Salad",
          "description": "Fresh garden vegetables tossed for a clean, bright bite.",
          "image": "assets/menu/Salad.jpeg",
          "price": 3,
          "subcategory": "Salads"
        },
        {
          "name": "Chicken Salad",
          "description": "Tender chicken served over a refreshing salad base.",
          "image": "assets/menu/Salad.jpeg",
          "price": 5,
          "subcategory": "Salads"
        },
        {
          "name": "Vegetables Clear Soup",
          "description": "Light clear soup simmered with fresh vegetables.",
          "image": "assets/menu/Soup.jpeg",
          "price": 3,
          "subcategory": "Soups"
        },
        {
          "name": "Fish Soup",
          "description": "Savory fish soup prepared with a delicate broth.",
          "image": "assets/menu/Soup.jpeg",
          "price": 4,
          "subcategory": "Soups"
        },
        {
          "name": "Lentil Soup",
          "description": "Warm lentil soup with comforting depth of flavor.",
          "image": "assets/menu/Soup.jpeg",
          "price": 4,
          "subcategory": "Soups"
        },
        {
          "name": "Creamy Chicken Soup",
          "description": "Smooth creamy chicken soup, rich and satisfying.",
          "image": "assets/menu/Soup.jpeg",
          "price": 4,
          "subcategory": "Soups"
        },
        {
          "name": "Clear Chicken Soup",
          "description": "Clear chicken broth soup, light and restorative.",
          "image": "assets/menu/Soup.jpeg",
          "price": 4,
          "subcategory": "Soups"
        },
        {
          "name": "Cream of Mushroom Soup",
          "description": "Velvety mushroom cream soup with a savory aroma.",
          "image": "assets/menu/Soup.jpeg",
          "price": 4,
          "subcategory": "Soups"
        }
      ]
    },
    {
      "id": "sides",
      "name": "Side Dishes",
      "description": "Simple sides to complete any plate.",
      "image": "assets/menu/Fries.jpeg",
      "items": [
        {
          "name": "Vegetable",
          "description": "A fresh vegetable side cooked to accompany your main dish.",
          "image": "assets/menu/Salad.jpeg",
          "price": 3
        },
        {
          "name": "Fries",
          "description": "Crispy golden fries, perfectly salted and served hot.",
          "image": "assets/menu/Fries.jpeg",
          "price": 3
        },
        {
          "name": "Mashed Potato",
          "description": "Creamy mashed potato with a smooth, buttery texture.",
          "image": "assets/menu/Fries.jpeg",
          "price": 3
        },
        {
          "name": "Chapati",
          "description": "Soft freshly made chapati, ideal with any meal.",
          "image": "assets/menu/Pastry_Roll.jpeg",
          "price": 2
        }
      ]
    },
    {
      "id": "health",
      "name": "Health Section",
      "description": "Mukhbaza and lighter bites from the Assod health selection.",
      "image": "assets/menu/Mukhbaza.jpeg",
      "items": [
        {
          "name": "Captain",
          "description": "A wholesome Mukhbaza-style Captain plate from our health section.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 5,
          "subcategory": "Mukhbaza"
        },
        {
          "name": "Feta-timir",
          "description": "Feta with dates — a balanced sweet and savory health bite.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 3,
          "subcategory": "Mukhbaza"
        },
        {
          "name": "Feta-muus",
          "description": "Feta with banana for a light and refreshing combination.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 3,
          "subcategory": "Mukhbaza"
        },
        {
          "name": "Macsub",
          "description": "Traditional macsub prepared as a nourishing light option.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 3,
          "subcategory": "Mukhbaza"
        },
        {
          "name": "Ratab",
          "description": "Soft ratab dates served as a naturally sweet health treat.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 3,
          "subcategory": "Mukhbaza"
        },
        {
          "name": "Hummus",
          "description": "Creamy hummus made smooth and ready to share.",
          "image": "assets/menu/Mukhbaza.jpeg",
          "price": 3,
          "subcategory": "Mukhbaza"
        }
      ]
    },
    {
      "id": "mains",
      "name": "Main Dishes",
      "description": "Steaks, grilled specialties, and Assod signature mains.",
      "image": "assets/menu/Assod_Special_Steak.jpeg",
      "items": [
        {
          "name": "Whole Fish",
          "description": "Whole fish prepared fresh and available in Small, Medium, or Large.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "prices": {
            "S": 8,
            "M": 12,
            "L": 18
          }
        },
        {
          "name": "Assod Special Steak",
          "description": "Our signature steak, grilled and finished with Assod seasoning.",
          "image": "assets/menu/Assod_Special_Steak.jpeg",
          "price": 11
        },
        {
          "name": "Beef Steak",
          "description": "Juicy beef steak cooked to a tender, flavorful finish.",
          "image": "assets/menu/Assod_Special_Steak.jpeg",
          "price": 8
        },
        {
          "name": "Camel Steak",
          "description": "Premium camel steak grilled for a distinctive rich taste.",
          "image": "assets/menu/Assod_Special_Steak.jpeg",
          "price": 10
        },
        {
          "name": "Stir Fried Beef",
          "description": "Stir-fried beef tossed hot with savory seasoning.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 8
        },
        {
          "name": "Stir Fried Beef Rice",
          "description": "Stir-fried beef served over fragrant rice.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 9
        },
        {
          "name": "Grilled Fish",
          "description": "Fresh fish grilled until flaky and aromatic.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 8
        },
        {
          "name": "Ugaali Beef",
          "description": "Classic ugaali paired with seasoned beef.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 8
        },
        {
          "name": "Creamy Spinach Fish Fillet",
          "description": "Fish fillet finished in a creamy spinach sauce.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 10
        },
        {
          "name": "Grilled Chicken",
          "description": "Tender grilled chicken with a golden finish.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 8
        },
        {
          "name": "Assod Chicken Legs",
          "description": "Assod-style chicken legs, juicy and well seasoned.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 8
        },
        {
          "name": "Sweet and Sour Fish",
          "description": "Crisp fish balanced with a sweet and sour glaze.",
          "image": "assets/menu/Sweet_And_Sour_Chicken.jpeg",
          "price": 8
        },
        {
          "name": "Sweet and Sour Chicken",
          "description": "Chicken coated in a bright sweet and sour sauce.",
          "image": "assets/menu/Sweet_And_Sour_Chicken.jpeg",
          "price": 8
        },
        {
          "name": "Chinese Fish",
          "description": "Fish prepared in a flavorful Chinese-inspired style.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 8
        },
        {
          "name": "Hanid Goat",
          "description": "Slow-cooked hanid goat with deep traditional flavor.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 10
        },
        {
          "name": "Boiled Goat",
          "description": "Tender boiled goat served in a comforting style.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 10
        },
        {
          "name": "Roasted Goat",
          "description": "Roasted goat with a rich, savory aroma.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 10
        },
        {
          "name": "Finger Fish",
          "description": "Crispy finger fish portions, golden and lightly seasoned.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 8
        }
      ]
    },
    {
      "id": "pasta-rice",
      "name": "Pasta & Rice",
      "description": "Pasta classics and rice sides from the Assod kitchen.",
      "image": "assets/menu/Penne_Alfredo.jpeg",
      "items": [
        {
          "name": "Penne Alfredo",
          "description": "Penne pasta tossed in a creamy Alfredo sauce.",
          "image": "assets/menu/Penne_Alfredo.jpeg",
          "price": 8
        },
        {
          "name": "Penne Arrabiata",
          "description": "Penne in a spicy Arrabiata tomato sauce.",
          "image": "assets/menu/Penne_Alfredo.jpeg",
          "price": 8
        },
        {
          "name": "Spaghetti Bolognese",
          "description": "Spaghetti topped with classic Bolognese sauce.",
          "image": "assets/menu/Penne_Alfredo.jpeg",
          "price": 7
        },
        {
          "name": "Spaghetti",
          "description": "Simple spaghetti prepared fresh and ready to enjoy.",
          "image": "assets/menu/Penne_Alfredo.jpeg",
          "price": 3
        },
        {
          "name": "Rice",
          "description": "Steamed rice served as a perfect side or light main.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 3
        }
      ]
    },
    {
      "id": "drinks",
      "name": "Drinks",
      "description": "Fresh juices, milkshakes, mojitos, and smoothies.",
      "image": "assets/menu/Fresh_Juice.jpeg",
      "items": [
        {
          "name": "Orange",
          "description": "Freshly pressed orange juice, bright and refreshing.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2.5,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Watermelon",
          "description": "Cool watermelon juice for a naturally sweet refreshment.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Papaya",
          "description": "Smooth papaya juice with a tropical finish.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Avocado",
          "description": "Creamy avocado juice, rich and satisfying.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2.5,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Mango",
          "description": "Sweet mango juice blended for a sunny taste.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2.5,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Cocktail",
          "description": "A mixed fruit cocktail juice packed with flavor.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 3,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Lemonade",
          "description": "Classic lemonade, chilled and citrus-fresh.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Lemon with Mint",
          "description": "Zesty lemonade infused with cool fresh mint.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Sweet Melon",
          "description": "Light sweet melon juice for a gentle refreshment.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Assod Juice",
          "description": "Signature Assod mixed juice, house specialty.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 3,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Banana Milk",
          "description": "Creamy banana milk, smooth and comforting.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Date Juice",
          "description": "Naturally sweet date juice with rich depth.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 2.5,
          "subcategory": "Fresh Juices"
        },
        {
          "name": "Strawberry Shake",
          "description": "Creamy strawberry milkshake blended until smooth.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 3,
          "subcategory": "Milkshakes"
        },
        {
          "name": "Chocolate Shake",
          "description": "Rich chocolate milkshake for a sweet indulgence.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 3,
          "subcategory": "Milkshakes"
        },
        {
          "name": "Vanilla Shake",
          "description": "Classic vanilla milkshake with a soft creamy finish.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 3,
          "subcategory": "Milkshakes"
        },
        {
          "name": "Caramel Shake",
          "description": "Caramel milkshake with a sweet golden taste.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 3,
          "subcategory": "Milkshakes"
        },
        {
          "name": "Oreo Shake",
          "description": "Cookies-and-cream Oreo shake, thick and delicious.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 3,
          "subcategory": "Milkshakes"
        },
        {
          "name": "Strawberry Mojito",
          "description": "Refreshing strawberry mojito with mint and citrus.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Blueberry Mojito",
          "description": "Cool blueberry mojito with a fruity twist.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Traditional Mojito",
          "description": "Classic traditional mojito with mint and lime.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Virgin Mojito",
          "description": "A non-alcoholic virgin mojito, crisp and refreshing.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Orange Mojito",
          "description": "Citrus orange mojito with a bright mint finish.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Passion Mojito",
          "description": "Passion fruit mojito with tropical sweetness.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Watermelon Mojito",
          "description": "Juicy watermelon mojito, cool and hydrating.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Vimto Mojito",
          "description": "Vimto-inspired mojito with a fruity berry profile.",
          "image": "assets/menu/Mojito.jpeg",
          "price": 3,
          "subcategory": "Mojitos"
        },
        {
          "name": "Strawberry Smoothie",
          "description": "Blended strawberry smoothie, thick and fruity.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        },
        {
          "name": "Chocolate Smoothie",
          "description": "Chocolate smoothie with a smooth creamy body.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        },
        {
          "name": "Mango Smoothie",
          "description": "Tropical mango smoothie blended until silky.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        },
        {
          "name": "Banana Smoothie",
          "description": "Banana smoothie for a naturally creamy refreshment.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        },
        {
          "name": "Avocado Smoothie",
          "description": "Rich avocado smoothie, smooth and nourishing.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        },
        {
          "name": "Tropical Smoothie",
          "description": "A tropical fruit smoothie packed with bright flavors.",
          "image": "assets/menu/Milkshake.jpeg",
          "price": 2.5,
          "subcategory": "Smoothies"
        }
      ]
    },
    {
      "id": "tea",
      "name": "Tea",
      "description": "Somali tea, karak, mint, and specialty hot teas.",
      "image": "assets/menu/Somali_Tea.jpeg",
      "items": [
        {
          "name": "Somali Tea",
          "description": "Aromatic Somali tea brewed for a comforting cup.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        },
        {
          "name": "Assod Tea",
          "description": "House Assod tea, lightly spiced and welcoming.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        },
        {
          "name": "Black Tea",
          "description": "Classic black tea served hot and fresh.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        },
        {
          "name": "Mint Tea",
          "description": "Refreshing mint tea with a cool herbal finish.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        },
        {
          "name": "Green Tea",
          "description": "Light green tea for a clean, calming sip.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        },
        {
          "name": "Karak Tea",
          "description": "Creamy karak tea with warm spice notes.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1.5
        },
        {
          "name": "Dawo Tea",
          "description": "Traditional dawo tea with a distinctive local taste.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1.5
        },
        {
          "name": "Turmeric Tea",
          "description": "Golden turmeric tea with a soothing character.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1.5
        },
        {
          "name": "Lemon Tea",
          "description": "Hot lemon tea with a bright citrus aroma.",
          "image": "assets/menu/Somali_Tea.jpeg",
          "price": 1
        }
      ]
    },
    {
      "id": "coffee",
      "name": "Coffee",
      "description": "Espresso, latte, cappuccino, and specialty coffee drinks.",
      "image": "assets/menu/Coffee.jpeg",
      "items": [
        {
          "name": "Cappuccino",
          "description": "Espresso topped with silky steamed milk foam.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2
        },
        {
          "name": "Cafe Latte",
          "description": "Smooth cafe latte with rich espresso and milk.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2
        },
        {
          "name": "Macchiato",
          "description": "Bold macchiato marked with a touch of foam.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2
        },
        {
          "name": "Espresso",
          "description": "Intense espresso shot for a pure coffee moment.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2
        },
        {
          "name": "Americano",
          "description": "Espresso lengthened with hot water for a clean cup.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2
        },
        {
          "name": "Caramel Latte",
          "description": "Cafe latte finished with sweet caramel.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 2.5
        },
        {
          "name": "Coffee Mocha",
          "description": "Chocolate mocha coffee with a smooth finish.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 1.5
        }
      ]
    },
    {
      "id": "soft-drinks",
      "name": "Soft Drinks",
      "description": "Water, Pepsi, Seven Up, and chilled soft drinks.",
      "image": "assets/menu/Fresh_Juice.jpeg",
      "items": [
        {
          "name": "Small SBI",
          "description": "Small SBI soft drink, chilled and ready to serve.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 1
        },
        {
          "name": "Small Water",
          "description": "Small bottled water for everyday refreshment.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 0.5
        },
        {
          "name": "Big Water",
          "description": "Large bottled water, perfect for the table.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 1
        },
        {
          "name": "Seven Up",
          "description": "Chilled Seven Up with a crisp lemon-lime taste.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 1.5
        },
        {
          "name": "Pepsi",
          "description": "Classic Pepsi, cold and refreshing.",
          "image": "assets/menu/Fresh_Juice.jpeg",
          "price": 1.5
        }
      ]
    },
    {
      "id": "fruits",
      "name": "Fruits",
      "description": "Fresh fruit bowls and Assod fruit specialties.",
      "image": "assets/menu/Mixed_Fruits.png",
      "items": [
        {
          "name": "Mixed Fruits",
          "description": "A fresh mix of seasonal fruits, ready to enjoy.",
          "image": "assets/menu/Mixed_Fruits.png",
          "price": 3
        },
        {
          "name": "Feta Papaya",
          "description": "Papaya paired with feta for a sweet-savory balance.",
          "image": "assets/menu/Mixed_Fruits.png",
          "price": 3
        },
        {
          "name": "Feta Xabxab",
          "description": "Watermelon with feta — refreshing and lightly savory.",
          "image": "assets/menu/Mixed_Fruits.png",
          "price": 3
        },
        {
          "name": "Assod Fruit",
          "description": "Assod’s signature fruit plate with selected seasonal cuts.",
          "image": "assets/menu/Mixed_Fruits.png",
          "price": 4
        }
      ]
    },
    {
      "id": "frappe",
      "name": "Frappe-base",
      "description": "Iced frappes and chilled coffee blends.",
      "image": "assets/menu/Coffee.jpeg",
      "items": [
        {
          "name": "Iced Caramel Frappes",
          "description": "Iced caramel frappe with a sweet creamy blend.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 3
        },
        {
          "name": "Iced Frappuccino",
          "description": "Smooth iced frappuccino for a cool coffee treat.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 3
        },
        {
          "name": "Iced Frappe Latte",
          "description": "Iced frappe latte with a balanced coffee creaminess.",
          "image": "assets/menu/Coffee.jpeg",
          "price": 3
        }
      ]
    },
    {
      "id": "fast-foods",
      "name": "Fast Foods",
      "description": "Burgers, shuwarma, sandwiches, quesadillas, and pizzas.",
      "image": "assets/menu/Assod_Pizza.jpeg",
      "items": [
        {
          "name": "Classic Cheese Burger",
          "description": "Juicy burger topped with melted cheese in a soft bun.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Burgers"
        },
        {
          "name": "California Smash Burger",
          "description": "Smash-style California burger with bold flavor.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Burgers"
        },
        {
          "name": "Smash It Up",
          "description": "A loaded smash burger built for serious cravings.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 7,
          "subcategory": "Burgers"
        },
        {
          "name": "Crispy Chicken Burger",
          "description": "Crispy chicken fillet burger with a golden crunch.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 6,
          "subcategory": "Burgers"
        },
        {
          "name": "Fish Burger",
          "description": "Crispy fish burger served hot in a soft bun.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 7,
          "subcategory": "Burgers"
        },
        {
          "name": "Bavarian Burger",
          "description": "Hearty Bavarian-style burger with rich toppings.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 7,
          "subcategory": "Burgers"
        },
        {
          "name": "Assod Shuwarma",
          "description": "Signature Assod shuwarma — choose beef, chicken, or fish.",
          "image": "assets/menu/Assod_Shuwarma.jpeg",
          "price": 7,
          "subcategory": "Shuwarma"
        },
        {
          "name": "Beef Shuwarma",
          "description": "Beef shuwarma wrapped with fresh vegetables and sauce.",
          "image": "assets/menu/Assod_Shuwarma.jpeg",
          "price": 6,
          "subcategory": "Shuwarma"
        },
        {
          "name": "Chicken Shuwarma",
          "description": "Chicken shuwarma with savory seasoning and soft wrap.",
          "image": "assets/menu/Assod_Shuwarma.jpeg",
          "price": 5,
          "subcategory": "Shuwarma"
        },
        {
          "name": "Fish Shuwarma",
          "description": "Fish shuwarma prepared fresh with light seasoning.",
          "image": "assets/menu/Assod_Shuwarma.jpeg",
          "price": 6,
          "subcategory": "Shuwarma"
        },
        {
          "name": "Vegetable Shuwarma",
          "description": "Vegetable shuwarma packed with fresh fillings.",
          "image": "assets/menu/Assod_Shuwarma.jpeg",
          "price": 4,
          "subcategory": "Shuwarma"
        },
        {
          "name": "Beef Quesadillas",
          "description": "Toasted quesadilla filled with seasoned beef and cheese.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Quesadillas"
        },
        {
          "name": "Chicken Quesadillas",
          "description": "Chicken quesadilla melted with savory cheese.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 5,
          "subcategory": "Quesadillas"
        },
        {
          "name": "Fish Quesadillas",
          "description": "Fish quesadilla with a crisp tortilla finish.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Quesadillas"
        },
        {
          "name": "Vegetable Quesadillas",
          "description": "Vegetable quesadilla filled with fresh garden flavors.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 4,
          "subcategory": "Quesadillas"
        },
        {
          "name": "Beef Sandwich",
          "description": "Hearty beef sandwich layered for a satisfying bite.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Chicken Sandwich",
          "description": "Tender chicken sandwich, simple and delicious.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 4,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Fish Sandwich",
          "description": "Light fish sandwich served fresh and flavorful.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 5,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Assod Club Sandwich",
          "description": "Assod club sandwich stacked with classic fillings.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Beef Cheese Sandwich",
          "description": "Beef and melted cheese in a generous sandwich.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 7,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Tuna Sandwich",
          "description": "Tuna sandwich with a creamy, savory filling.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 6,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Egg Sandwich",
          "description": "Warm egg sandwich, perfect any time of day.",
          "image": "assets/menu/Assod_Club_Sandwich.jpeg",
          "price": 4,
          "subcategory": "Sandwiches"
        },
        {
          "name": "Beef Pizza",
          "description": "Beef pizza available in Small, Medium, and Large.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 7,
            "M": 8,
            "L": 11
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Chicken Pizza",
          "description": "Chicken pizza baked with savory toppings — S, M, or L.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 7,
            "M": 8,
            "L": 11
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Tuna Pizza",
          "description": "Tuna pizza with a rich seafood finish — S, M, or L.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 8,
            "M": 10,
            "L": 12
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Fish Pizza",
          "description": "Fish pizza baked fresh in Small, Medium, or Large.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 8,
            "M": 10,
            "L": 12
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Assod Pizza Mixed",
          "description": "Signature Assod mixed pizza loaded with selected toppings.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 10,
            "M": 12,
            "L": 14
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Margherita Pizza",
          "description": "Classic Margherita with tomato, cheese, and herbs.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 6,
            "M": 8,
            "L": 10
          },
          "subcategory": "Pizzas"
        },
        {
          "name": "Hawaii Beef Pizza",
          "description": "Hawaii-style beef pizza with a sweet-savory balance.",
          "image": "assets/menu/Assod_Pizza.jpeg",
          "prices": {
            "S": 8,
            "M": 10,
            "L": 12
          },
          "subcategory": "Pizzas"
        }
      ]
    },
    {
      "id": "asian",
      "name": "Asian Corner",
      "description": "Curries, biryani, tikka, and tandoori specialties.",
      "image": "assets/menu/Chicken_Curry.jpeg",
      "items": [
        {
          "name": "Mutton Curry",
          "description": "Slow-cooked mutton curry with aromatic spices.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 8,
          "subcategory": "Curry"
        },
        {
          "name": "Chicken Curry",
          "description": "Classic chicken curry in a rich, flavorful gravy.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 7,
          "subcategory": "Curry"
        },
        {
          "name": "Fish Curry",
          "description": "Fish curry simmered with warm spice and sauce.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 8,
          "subcategory": "Curry"
        },
        {
          "name": "Beef Curry",
          "description": "Tender beef curry cooked in a deep savory sauce.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 8,
          "subcategory": "Curry"
        },
        {
          "name": "Vegetable Curry",
          "description": "Vegetable curry with a wholesome, spiced broth.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 6,
          "subcategory": "Curry"
        },
        {
          "name": "Mutton Biryani",
          "description": "Fragrant mutton biryani layered with seasoned rice.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 8,
          "subcategory": "Biryani"
        },
        {
          "name": "Fish Biryani",
          "description": "Aromatic fish biryani cooked with fragrant spices.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 8,
          "subcategory": "Biryani"
        },
        {
          "name": "Chicken Biryani",
          "description": "Classic chicken biryani with richly seasoned rice.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 8,
          "subcategory": "Biryani"
        },
        {
          "name": "Vegetable Biryani",
          "description": "Vegetable biryani with fragrant rice and mild spice.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 6,
          "subcategory": "Biryani"
        },
        {
          "name": "Chicken Butter",
          "description": "Creamy butter chicken finished in a rich tomato sauce.",
          "image": "assets/menu/Chicken_Curry.jpeg",
          "price": 9
        },
        {
          "name": "Chicken Tikka",
          "description": "Marinated chicken tikka grilled for smoky flavor.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 8
        },
        {
          "name": "Chicken Tandoori",
          "description": "Tandoori chicken with a bold, charred finish.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 7
        },
        {
          "name": "Mutton Tikka",
          "description": "Mutton tikka grilled until tender and aromatic.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 9
        },
        {
          "name": "Fish Tikka",
          "description": "Spiced fish tikka grilled for a light, savory bite.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 8
        }
      ]
    },
    {
      "id": "mandi",
      "name": "Mandi",
      "description": "Fragrant mandi rice dishes with goat, fish, or chicken.",
      "image": "assets/menu/Chicken_Mandi.jpeg",
      "items": [
        {
          "name": "Goat Mandi",
          "description": "Signature goat mandi served with fragrant rice.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 12
        },
        {
          "name": "Fish Mandi",
          "description": "Fish mandi prepared with aromatic rice and spice.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 9
        },
        {
          "name": "Chicken Mandi",
          "description": "Chicken mandi with fragrant rice and traditional seasoning.",
          "image": "assets/menu/Chicken_Mandi.jpeg",
          "price": 8
        }
      ]
    },
    {
      "id": "kids",
      "name": "Kids Menu",
      "description": "Smaller portions made for younger guests.",
      "image": "assets/menu/Chicken_Nuggets.jpeg",
      "items": [
        {
          "name": "Chicken Fingers",
          "description": "Crispy chicken fingers sized for younger guests.",
          "image": "assets/menu/Chicken_Nuggets.jpeg",
          "price": 5
        },
        {
          "name": "Fish Fingers",
          "description": "Golden fish fingers, light and kid-friendly.",
          "image": "assets/menu/Grilled_Fish.jpeg",
          "price": 5
        },
        {
          "name": "Chicken Nuggets",
          "description": "Bite-sized chicken nuggets served crispy and hot.",
          "image": "assets/menu/Chicken_Nuggets.jpeg",
          "price": 5
        },
        {
          "name": "Fish Nuggets",
          "description": "Crispy fish nuggets perfect for little appetites.",
          "image": "assets/menu/Chicken_Nuggets.jpeg",
          "price": 5
        },
        {
          "name": "Chips Masala",
          "description": "Masala-spiced chips with a flavorful kids’ twist.",
          "image": "assets/menu/Fries.jpeg",
          "price": 4
        },
        {
          "name": "Kids Beef Suqaar",
          "description": "Mild beef suqaar prepared in a kids’ portion.",
          "image": "assets/menu/Stir_Fried_Beef.jpeg",
          "price": 5
        },
        {
          "name": "Kids Chicken Suqaar",
          "description": "Gentle chicken suqaar sized for children.",
          "image": "assets/menu/Grilled_Chicken.jpeg",
          "price": 4
        }
      ]
    },
    {
      "id": "wadani",
      "name": "Wadani Foods",
      "description": "Local Wadani favorites from the Assod kitchen.",
      "image": "assets/menu/Mixed_Wadani.jpeg",
      "items": [
        {
          "name": "Garow Beef Kalan",
          "description": "Traditional garow beef kalan with authentic local flavor.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 8
        },
        {
          "name": "Garow Fish Kalan",
          "description": "Garow fish kalan prepared in a classic Wadani style.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 8
        },
        {
          "name": "Garow Chicken Kalan",
          "description": "Garow chicken kalan with comforting regional seasoning.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 7
        },
        {
          "name": "Garow",
          "description": "Simple garow, a beloved local staple at Assod.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 3
        },
        {
          "name": "Shuuro",
          "description": "Warm shuuro soup with traditional Somali character.",
          "image": "assets/menu/Soup.jpeg",
          "price": 3
        },
        {
          "name": "Heed",
          "description": "Classic heed prepared as a comforting Wadani dish.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 3
        },
        {
          "name": "Galley",
          "description": "Traditional galley with wholesome local flavor.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 3
        },
        {
          "name": "Digir",
          "description": "Hearty digir beans cooked in a familiar home style.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 3
        },
        {
          "name": "Mixed Wadani",
          "description": "A mixed Wadani plate featuring selected local favorites.",
          "image": "assets/menu/Mixed_Wadani.jpeg",
          "price": 3
        }
      ]
    },
    {
      "id": "desserts",
      "name": "Cakes & Desserts",
      "description": "Cakes, pastries, and sweet finishes.",
      "image": "assets/menu/Black_Forest_Cake.jpeg",
      "items": [
        {
          "name": "Black Forest Cake",
          "description": "Classic Black Forest cake with chocolate and cherry notes.",
          "image": "assets/menu/Black_Forest_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "White Forest Cake",
          "description": "Light White Forest cake with a soft creamy finish.",
          "image": "assets/menu/Black_Forest_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Cheese Cake",
          "description": "Smooth cheesecake with a rich, creamy texture.",
          "image": "assets/menu/Cheese_Cake.jpeg",
          "price": 3
        },
        {
          "name": "Tiramisu Cake",
          "description": "Coffee-kissed tiramisu cake for an elegant dessert.",
          "image": "assets/menu/Cheese_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Red Velvet Cake",
          "description": "Soft red velvet cake with a delicate cocoa taste.",
          "image": "assets/menu/Red_Velvet_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Chocolate Cake",
          "description": "Moist chocolate cake for a classic sweet ending.",
          "image": "assets/menu/Black_Forest_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Caramel Cake",
          "description": "Caramel cake with a warm, buttery sweetness.",
          "image": "assets/menu/Cheese_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Strawberry Cake",
          "description": "Light strawberry cake with a fruity finish.",
          "image": "assets/menu/Red_Velvet_Cake.jpeg",
          "price": 2.5
        },
        {
          "name": "Dry Cake",
          "description": "Simple dry cake, ideal with tea or coffee.",
          "image": "assets/menu/Pastry_Roll.jpeg",
          "price": 1
        },
        {
          "name": "Croissant",
          "description": "Flaky butter croissant, baked golden and light.",
          "image": "assets/menu/Pastry_Roll.jpeg",
          "price": 2
        },
        {
          "name": "Donut",
          "description": "Soft sweet donut for a quick dessert treat.",
          "image": "assets/menu/Donut.jpeg",
          "price": 1
        },
        {
          "name": "Basbusa",
          "description": "Sweet basbusa syrup cake with a tender crumb.",
          "image": "assets/menu/Pastry_Roll.jpeg",
          "price": 1
        },
        {
          "name": "Sambuza",
          "description": "Crispy golden sambuza pastries filled with savory spiced filling, served with dipping sauce.",
          "image": "assets/menu/Sambuza.png",
          "price": 0.5
        }
      ]
    }
  ]
};
