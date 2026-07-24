/* =========================================================
   Assod Hotel — Restaurant Menu Data
   Source: Assod Hotel menu.pdf (names & prices)
   Descriptions added for items without PDF copy.
   Replace with fetch('/api/menu') later.
   ========================================================= */

window.AssodMenu = {
  currency: "USD",
  updatedFrom: "Assod Hotel Restaurant & Coffee Shop Menu",

  /* Curated food images used by the menu card renderer */
  images: {
    breakfast:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    eggs:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    pancakes:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    toast:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    waffle:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
    cereal:
      "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=800&q=80",
    porridge:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    salad:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    soup:
      "https://images.unsplash.com/photo-1547592166-23acba133eaa?auto=format&fit=crop&w=800&q=80",
    fries:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    potato:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80",
    bread:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    hummus:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
    healthy:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    fish:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    steak:
      "https://images.unsplash.com/photo-1544025162-d76690232fce?auto=format&fit=crop&w=800&q=80",
    chicken:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
    goat:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    beef:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
    pasta:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    rice:
      "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=800&q=80",
    juice:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80",
    shake:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    mojito:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
    smoothie:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80",
    tea:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
    coffee:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    fruit:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
    soda:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80",
    water:
      "https://images.unsplash.com/photo-1548832335-cf220bd5a7b4?auto=format&fit=crop&w=800&q=80",
    frappe:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    burger:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    shawarma:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    quesadilla:
      "https://images.unsplash.com/photo-1618040996337-56954e3b1b1b?auto=format&fit=crop&w=800&q=80",
    sandwich:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    pizza:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    curry:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    biryani:
      "https://images.unsplash.com/photo-1563379091339-03b54422319b?auto=format&fit=crop&w=800&q=80",
    mandi:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    kids:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    nuggets:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80",
    local:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    cake:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    pastry:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    donut:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    default:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },

  categories: [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Start your morning with Assod classics, eggs, and Somali favorites.",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80",
      items: [
        {
          name: "English Breakfast",
          price: 8,
          imageKey: "breakfast",
          description:
            "A delicious English breakfast served with eggs, pancakes, baked beans, beef strips, fresh fruits, home fries, and a cup of tea.",
        },
        {
          name: "Choice of Eggs",
          price: 4,
          imageKey: "eggs",
          description: "Prepared your way — omelet, boiled, fried, scrambled, or poached.",
        },
        {
          name: "Egg Benedict",
          price: 5,
          imageKey: "eggs",
          description: "Poached eggs topped with hollandaise sauce and toasted bread.",
        },
        {
          name: "Assod Special Breakfast",
          price: 8,
          imageKey: "breakfast",
          description: "Suqaar, liver, malawax, scrambled eggs, sausage beef, and bread.",
        },
        {
          name: "Assod Combo",
          price: 7,
          imageKey: "breakfast",
          description: "Goat liver, fried eggs, and toasted bread — a hearty Assod favorite.",
        },
        {
          name: "Goat Liver",
          price: 5,
          imageKey: "goat",
          description: "Tender goat liver cooked to perfection and served hot.",
        },
        {
          name: "Camel Liver",
          price: 5,
          imageKey: "beef",
          description: "Rich camel liver prepared in the Assod kitchen style.",
        },
        {
          name: "Pancakes",
          price: 4,
          imageKey: "pancakes",
          description: "Soft golden pancakes, ideal for a sweet morning start.",
        },
        {
          name: "French Toast",
          price: 5,
          imageKey: "toast",
          description: "Golden French toast with a light, comforting finish.",
        },
        {
          name: "Suqaar Adhi",
          price: 6,
          imageKey: "goat",
          description: "Classic goat suqaar, seasoned and served for a satisfying breakfast.",
        },
        {
          name: "Suqaar Beef",
          price: 5,
          imageKey: "beef",
          description: "Finely chopped beef suqaar cooked with aromatic spices.",
        },
        {
          name: "Suqaar Fish",
          price: 5,
          imageKey: "fish",
          description: "Light fish suqaar prepared fresh for a flavorful morning meal.",
        },
        {
          name: "Somali Laxoox",
          price: 3,
          imageKey: "bread",
          description: "Traditional Somali laxoox — soft, spongy, and freshly made.",
        },
        {
          name: "Egg Shafayn",
          price: 4,
          imageKey: "eggs",
          description: "A savory egg shafayn preparation, perfect with bread.",
        },
        {
          name: "Cambaabur",
          price: 4,
          imageKey: "bread",
          description: "Traditional cambaabur with authentic regional flavor.",
        },
        {
          name: "Foul",
          price: 3.5,
          imageKey: "healthy",
          description: "Warm foul beans seasoned and served for a wholesome breakfast.",
        },
        {
          name: "Haricot",
          price: 3.5,
          imageKey: "healthy",
          description: "Tender haricot beans prepared in a comforting savory style.",
        },
        {
          name: "Waffles",
          price: 5,
          imageKey: "waffle",
          description: "Crisp waffles served warm for a delightful breakfast treat.",
        },
        {
          name: "Corn Flakes",
          price: 3,
          imageKey: "cereal",
          description: "Classic corn flakes served with milk for a light start.",
        },
        {
          name: "Malawax",
          price: 4,
          imageKey: "bread",
          description: "Soft Somali malawax, lightly cooked and ready to enjoy.",
        },
        {
          name: "Porridge",
          price: 3,
          imageKey: "porridge",
          description: "Warm, comforting porridge prepared fresh each morning.",
        },
        {
          name: "Beans",
          price: 3.5,
          imageKey: "healthy",
          description: "Hearty breakfast beans cooked until soft and flavorful.",
        },
        {
          name: "Assod Rolex",
          price: 6,
          imageKey: "eggs",
          description: "Chapati wrapped with eggs of choice and beef or chicken.",
        },
      ],
    },
    {
      id: "starters",
      name: "Starters",
      description: "Fresh salads and comforting soups to begin your meal.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Caesar Salad", price: 5, subcategory: "Salads", imageKey: "salad", description: "Crisp greens with Caesar dressing and a classic finish." },
        { name: "Tuna Salad", price: 6, subcategory: "Salads", imageKey: "salad", description: "Fresh salad topped with tender tuna for a light starter." },
        { name: "Chef’s Salad", price: 6, subcategory: "Salads", imageKey: "salad", description: "A colorful chef’s salad with premium mixed toppings." },
        { name: "Garden Salad", price: 3, subcategory: "Salads", imageKey: "salad", description: "Fresh garden vegetables tossed for a clean, bright bite." },
        { name: "Chicken Salad", price: 5, subcategory: "Salads", imageKey: "salad", description: "Tender chicken served over a refreshing salad base." },
        { name: "Vegetables Clear Soup", price: 3, subcategory: "Soups", imageKey: "soup", description: "Light clear soup simmered with fresh vegetables." },
        { name: "Fish Soup", price: 4, subcategory: "Soups", imageKey: "soup", description: "Savory fish soup prepared with a delicate broth." },
        { name: "Lentil Soup", price: 4, subcategory: "Soups", imageKey: "soup", description: "Warm lentil soup with comforting depth of flavor." },
        { name: "Creamy Chicken Soup", price: 4, subcategory: "Soups", imageKey: "soup", description: "Smooth creamy chicken soup, rich and satisfying." },
        { name: "Clear Chicken Soup", price: 4, subcategory: "Soups", imageKey: "soup", description: "Clear chicken broth soup, light and restorative." },
        { name: "Cream of Mushroom Soup", price: 4, subcategory: "Soups", imageKey: "soup", description: "Velvety mushroom cream soup with a savory aroma." },
      ],
    },
    {
      id: "sides",
      name: "Side Dishes",
      description: "Simple sides to complete any plate.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Vegetable", price: 3, imageKey: "healthy", description: "A fresh vegetable side cooked to accompany your main dish." },
        { name: "Fries", price: 3, imageKey: "fries", description: "Crispy golden fries, perfectly salted and served hot." },
        { name: "Mashed Potato", price: 3, imageKey: "potato", description: "Creamy mashed potato with a smooth, buttery texture." },
        { name: "Chapati", price: 2, imageKey: "bread", description: "Soft freshly made chapati, ideal with any meal." },
      ],
    },
    {
      id: "health",
      name: "Health Section",
      description: "Mukhbaza and lighter bites from the Assod health selection.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Captain", price: 5, subcategory: "Mukhbaza", imageKey: "healthy", description: "A wholesome Mukhbaza-style Captain plate from our health section." },
        { name: "Feta-timir", price: 3, subcategory: "Mukhbaza", imageKey: "healthy", description: "Feta with dates — a balanced sweet and savory health bite." },
        { name: "Feta-muus", price: 3, subcategory: "Mukhbaza", imageKey: "fruit", description: "Feta with banana for a light and refreshing combination." },
        { name: "Macsub", price: 3, subcategory: "Mukhbaza", imageKey: "healthy", description: "Traditional macsub prepared as a nourishing light option." },
        { name: "Ratab", price: 3, subcategory: "Mukhbaza", imageKey: "fruit", description: "Soft ratab dates served as a naturally sweet health treat." },
        { name: "Hummus", price: 3, subcategory: "Mukhbaza", imageKey: "hummus", description: "Creamy hummus made smooth and ready to share." },
      ],
    },
    {
      id: "mains",
      name: "Main Dishes",
      description: "Steaks, grilled favorites, pasta, rice, and Assod signatures.",
      image: "https://images.unsplash.com/photo-1544025162-d76690232fce?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Whole Fish", prices: { S: 8, M: 12, L: 18 }, imageKey: "fish", description: "Whole fish prepared fresh and available in Small, Medium, or Large." },
        { name: "Assod Special Steak", price: 11, imageKey: "steak", description: "Our signature steak, grilled and finished with Assod seasoning." },
        { name: "Beef Steak", price: 8, imageKey: "steak", description: "Juicy beef steak cooked to a tender, flavorful finish." },
        { name: "Camel Steak", price: 10, imageKey: "steak", description: "Premium camel steak grilled for a distinctive rich taste." },
        { name: "Stir Fried Beef", price: 8, imageKey: "beef", description: "Stir-fried beef tossed hot with savory seasoning." },
        { name: "Stir Fried Beef Rice", price: 9, imageKey: "rice", description: "Stir-fried beef served over fragrant rice." },
        { name: "Grilled Fish", price: 8, imageKey: "fish", description: "Fresh fish grilled until flaky and aromatic." },
        { name: "Ugaali Beef", price: 8, imageKey: "beef", description: "Classic ugaali paired with seasoned beef." },
        { name: "Creamy Spinach Fish Fillet", price: 10, imageKey: "fish", description: "Fish fillet finished in a creamy spinach sauce." },
        { name: "Grilled Chicken", price: 8, imageKey: "chicken", description: "Tender grilled chicken with a golden finish." },
        { name: "Assod Chicken Legs", price: 8, imageKey: "chicken", description: "Assod-style chicken legs, juicy and well seasoned." },
        { name: "Sweet and Sour Fish", price: 8, imageKey: "fish", description: "Crisp fish balanced with a sweet and sour glaze." },
        { name: "Sweet and Sour Chicken", price: 8, imageKey: "chicken", description: "Chicken coated in a bright sweet and sour sauce." },
        { name: "Chinese Fish", price: 8, imageKey: "fish", description: "Fish prepared in a flavorful Chinese-inspired style." },
        { name: "Hanid Goat", price: 10, imageKey: "goat", description: "Slow-cooked hanid goat with deep traditional flavor." },
        { name: "Boiled Goat", price: 10, imageKey: "goat", description: "Tender boiled goat served in a comforting style." },
        { name: "Roasted Goat", price: 10, imageKey: "goat", description: "Roasted goat with a rich, savory aroma." },
        { name: "Finger Fish", price: 8, imageKey: "fish", description: "Crispy finger fish portions, golden and lightly seasoned." },
        { name: "Penne Alfredo", price: 8, subcategory: "Pasta and Rice", imageKey: "pasta", description: "Penne pasta tossed in a creamy Alfredo sauce." },
        { name: "Penne Arrabiata", price: 8, subcategory: "Pasta and Rice", imageKey: "pasta", description: "Penne in a spicy Arrabiata tomato sauce." },
        { name: "Spaghetti Bolognese", price: 7, subcategory: "Pasta and Rice", imageKey: "pasta", description: "Spaghetti topped with classic Bolognese sauce." },
        { name: "Spaghetti", price: 3, subcategory: "Pasta and Rice", imageKey: "pasta", description: "Simple spaghetti prepared fresh and ready to enjoy." },
        { name: "Rice", price: 3, subcategory: "Pasta and Rice", imageKey: "rice", description: "Steamed rice served as a perfect side or light main." },
      ],
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Fresh juices, milkshakes, mojitos, and smoothies.",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Orange", price: 2.5, subcategory: "Fresh Juices", imageKey: "juice", description: "Freshly pressed orange juice, bright and refreshing." },
        { name: "Watermelon", price: 2, subcategory: "Fresh Juices", imageKey: "juice", description: "Cool watermelon juice for a naturally sweet refreshment." },
        { name: "Papaya", price: 2, subcategory: "Fresh Juices", imageKey: "juice", description: "Smooth papaya juice with a tropical finish." },
        { name: "Avocado", price: 2.5, subcategory: "Fresh Juices", imageKey: "juice", description: "Creamy avocado juice, rich and satisfying." },
        { name: "Mango", price: 2.5, subcategory: "Fresh Juices", imageKey: "juice", description: "Sweet mango juice blended for a sunny taste." },
        { name: "Cocktail", price: 3, subcategory: "Fresh Juices", imageKey: "juice", description: "A mixed fruit cocktail juice packed with flavor." },
        { name: "Lemonade", price: 2, subcategory: "Fresh Juices", imageKey: "juice", description: "Classic lemonade, chilled and citrus-fresh." },
        { name: "Lemon with Mint", price: 2, subcategory: "Fresh Juices", imageKey: "mojito", description: "Zesty lemonade infused with cool fresh mint." },
        { name: "Sweet Melon", price: 2, subcategory: "Fresh Juices", imageKey: "juice", description: "Light sweet melon juice for a gentle refreshment." },
        { name: "Assod Juice", price: 3, subcategory: "Fresh Juices", imageKey: "juice", description: "Signature Assod mixed juice, house specialty." },
        { name: "Banana Milk", price: 2, subcategory: "Fresh Juices", imageKey: "shake", description: "Creamy banana milk, smooth and comforting." },
        { name: "Date Juice", price: 2.5, subcategory: "Fresh Juices", imageKey: "juice", description: "Naturally sweet date juice with rich depth." },
        { name: "Strawberry Shake", price: 3, subcategory: "Milkshakes", imageKey: "shake", description: "Creamy strawberry milkshake blended until smooth." },
        { name: "Chocolate Shake", price: 3, subcategory: "Milkshakes", imageKey: "shake", description: "Rich chocolate milkshake for a sweet indulgence." },
        { name: "Vanilla Shake", price: 3, subcategory: "Milkshakes", imageKey: "shake", description: "Classic vanilla milkshake with a soft creamy finish." },
        { name: "Caramel Shake", price: 3, subcategory: "Milkshakes", imageKey: "shake", description: "Caramel milkshake with a sweet golden taste." },
        { name: "Oreo Shake", price: 3, subcategory: "Milkshakes", imageKey: "shake", description: "Cookies-and-cream Oreo shake, thick and delicious." },
        { name: "Strawberry Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Refreshing strawberry mojito with mint and citrus." },
        { name: "Blueberry Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Cool blueberry mojito with a fruity twist." },
        { name: "Traditional Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Classic traditional mojito with mint and lime." },
        { name: "Virgin Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "A non-alcoholic virgin mojito, crisp and refreshing." },
        { name: "Orange Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Citrus orange mojito with a bright mint finish." },
        { name: "Passion Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Passion fruit mojito with tropical sweetness." },
        { name: "Watermelon Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Juicy watermelon mojito, cool and hydrating." },
        { name: "Vimto Mojito", price: 3, subcategory: "Mojitos", imageKey: "mojito", description: "Vimto-inspired mojito with a fruity berry profile." },
        { name: "Strawberry Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "Blended strawberry smoothie, thick and fruity." },
        { name: "Chocolate Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "Chocolate smoothie with a smooth creamy body." },
        { name: "Mango Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "Tropical mango smoothie blended until silky." },
        { name: "Banana Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "Banana smoothie for a naturally creamy refreshment." },
        { name: "Avocado Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "Rich avocado smoothie, smooth and nourishing." },
        { name: "Tropical Smoothie", price: 2.5, subcategory: "Smoothies", imageKey: "smoothie", description: "A tropical fruit smoothie packed with bright flavors." },
      ],
    },
    {
      id: "tea-coffee",
      name: "Tea & Coffee",
      description: "Teas, coffees, soft drinks, fruits, and iced frappes.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Somali Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "Aromatic Somali tea brewed for a comforting cup." },
        { name: "Assod Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "House Assod tea, lightly spiced and welcoming." },
        { name: "Black Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "Classic black tea served hot and fresh." },
        { name: "Mint Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "Refreshing mint tea with a cool herbal finish." },
        { name: "Green Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "Light green tea for a clean, calming sip." },
        { name: "Karak Tea", price: 1.5, subcategory: "Tea", imageKey: "tea", description: "Creamy karak tea with warm spice notes." },
        { name: "Dawo Tea", price: 1.5, subcategory: "Tea", imageKey: "tea", description: "Traditional dawo tea with a distinctive local taste." },
        { name: "Turmeric Tea", price: 1.5, subcategory: "Tea", imageKey: "tea", description: "Golden turmeric tea with a soothing character." },
        { name: "Lemon Tea", price: 1, subcategory: "Tea", imageKey: "tea", description: "Hot lemon tea with a bright citrus aroma." },
        { name: "Mixed Fruits", price: 3, subcategory: "Fruits", imageKey: "fruit", description: "A fresh mix of seasonal fruits, ready to enjoy." },
        { name: "Feta Papaya", price: 3, subcategory: "Fruits", imageKey: "fruit", description: "Papaya paired with feta for a sweet-savory balance." },
        { name: "Feta Xabxab", price: 3, subcategory: "Fruits", imageKey: "fruit", description: "Watermelon with feta — refreshing and lightly savory." },
        { name: "Assod Fruit", price: 4, subcategory: "Fruits", imageKey: "fruit", description: "Assod’s signature fruit plate with selected seasonal cuts." },
        { name: "Small SBI", price: 1, subcategory: "Soft Drinks", imageKey: "soda", description: "Small SBI soft drink, chilled and ready to serve." },
        { name: "Small Water", price: 0.5, subcategory: "Soft Drinks", imageKey: "water", description: "Small bottled water for everyday refreshment." },
        { name: "Big Water", price: 1, subcategory: "Soft Drinks", imageKey: "water", description: "Large bottled water, perfect for the table." },
        { name: "Seven Up", price: 1.5, subcategory: "Soft Drinks", imageKey: "soda", description: "Chilled Seven Up with a crisp lemon-lime taste." },
        { name: "Pepsi", price: 1.5, subcategory: "Soft Drinks", imageKey: "soda", description: "Classic Pepsi, cold and refreshing." },
        { name: "Iced Caramel Frappes", price: 3, subcategory: "Frappe-base", imageKey: "frappe", description: "Iced caramel frappe with a sweet creamy blend." },
        { name: "Iced Frappuccino", price: 3, subcategory: "Frappe-base", imageKey: "frappe", description: "Smooth iced frappuccino for a cool coffee treat." },
        { name: "Iced Frappe Latte", price: 3, subcategory: "Frappe-base", imageKey: "frappe", description: "Iced frappe latte with a balanced coffee creaminess." },
        { name: "Cappuccino", price: 2, subcategory: "Coffee", imageKey: "coffee", description: "Espresso topped with silky steamed milk foam." },
        { name: "Cafe Latte", price: 2, subcategory: "Coffee", imageKey: "coffee", description: "Smooth cafe latte with rich espresso and milk." },
        { name: "Macchiato", price: 2, subcategory: "Coffee", imageKey: "coffee", description: "Bold macchiato marked with a touch of foam." },
        { name: "Espresso", price: 2, subcategory: "Coffee", imageKey: "coffee", description: "Intense espresso shot for a pure coffee moment." },
        { name: "Americano", price: 2, subcategory: "Coffee", imageKey: "coffee", description: "Espresso lengthened with hot water for a clean cup." },
        { name: "Caramel Latte", price: 2.5, subcategory: "Coffee", imageKey: "coffee", description: "Cafe latte finished with sweet caramel." },
        { name: "Coffee Mocha", price: 1.5, subcategory: "Coffee", imageKey: "coffee", description: "Chocolate mocha coffee with a smooth finish." },
      ],
    },
    {
      id: "fast-foods",
      name: "Fast Foods",
      description: "Burgers, shawarma, quesadillas, sandwiches, and pizzas.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Classic Cheese Burger", price: 6, subcategory: "Burgers", imageKey: "burger", description: "Juicy burger topped with melted cheese in a soft bun." },
        { name: "California Smash Burger", price: 6, subcategory: "Burgers", imageKey: "burger", description: "Smash-style California burger with bold flavor." },
        { name: "Smash It Up", price: 7, subcategory: "Burgers", imageKey: "burger", description: "A loaded smash burger built for serious cravings." },
        { name: "Crispy Chicken Burger", price: 6, subcategory: "Burgers", imageKey: "burger", description: "Crispy chicken fillet burger with a golden crunch." },
        { name: "Fish Burger", price: 7, subcategory: "Burgers", imageKey: "burger", description: "Crispy fish burger served hot in a soft bun." },
        { name: "Bavarian Burger", price: 7, subcategory: "Burgers", imageKey: "burger", description: "Hearty Bavarian-style burger with rich toppings." },
        { name: "Assod Shuwarma", price: 7, subcategory: "Shuwarma", imageKey: "shawarma", description: "Signature Assod shuwarma — choose beef, chicken, or fish." },
        { name: "Beef Shuwarma", price: 6, subcategory: "Shuwarma", imageKey: "shawarma", description: "Beef shuwarma wrapped with fresh vegetables and sauce." },
        { name: "Chicken Shuwarma", price: 5, subcategory: "Shuwarma", imageKey: "shawarma", description: "Chicken shuwarma with savory seasoning and soft wrap." },
        { name: "Fish Shuwarma", price: 6, subcategory: "Shuwarma", imageKey: "shawarma", description: "Fish shuwarma prepared fresh with light seasoning." },
        { name: "Vegetable Shuwarma", price: 4, subcategory: "Shuwarma", imageKey: "shawarma", description: "Vegetable shuwarma packed with fresh fillings." },
        { name: "Beef Quesadillas", price: 6, subcategory: "Quesadillas", imageKey: "quesadilla", description: "Toasted quesadilla filled with seasoned beef and cheese." },
        { name: "Chicken Quesadillas", price: 5, subcategory: "Quesadillas", imageKey: "quesadilla", description: "Chicken quesadilla melted with savory cheese." },
        { name: "Fish Quesadillas", price: 6, subcategory: "Quesadillas", imageKey: "quesadilla", description: "Fish quesadilla with a crisp tortilla finish." },
        { name: "Vegetable Quesadillas", price: 4, subcategory: "Quesadillas", imageKey: "quesadilla", description: "Vegetable quesadilla filled with fresh garden flavors." },
        { name: "Beef Sandwich", price: 6, subcategory: "Sandwiches", imageKey: "sandwich", description: "Hearty beef sandwich layered for a satisfying bite." },
        { name: "Chicken Sandwich", price: 4, subcategory: "Sandwiches", imageKey: "sandwich", description: "Tender chicken sandwich, simple and delicious." },
        { name: "Fish Sandwich", price: 5, subcategory: "Sandwiches", imageKey: "sandwich", description: "Light fish sandwich served fresh and flavorful." },
        { name: "Assod Club Sandwich", price: 6, subcategory: "Sandwiches", imageKey: "sandwich", description: "Assod club sandwich stacked with classic fillings." },
        { name: "Beef Cheese Sandwich", price: 7, subcategory: "Sandwiches", imageKey: "sandwich", description: "Beef and melted cheese in a generous sandwich." },
        { name: "Tuna Sandwich", price: 6, subcategory: "Sandwiches", imageKey: "sandwich", description: "Tuna sandwich with a creamy, savory filling." },
        { name: "Egg Sandwich", price: 4, subcategory: "Sandwiches", imageKey: "sandwich", description: "Warm egg sandwich, perfect any time of day." },
        { name: "Beef Pizza", prices: { S: 7, M: 8, L: 11 }, subcategory: "Pizzas", imageKey: "pizza", description: "Beef pizza available in Small, Medium, and Large." },
        { name: "Chicken Pizza", prices: { S: 7, M: 8, L: 11 }, subcategory: "Pizzas", imageKey: "pizza", description: "Chicken pizza baked with savory toppings — S, M, or L." },
        { name: "Tuna Pizza", prices: { S: 8, M: 10, L: 12 }, subcategory: "Pizzas", imageKey: "pizza", description: "Tuna pizza with a rich seafood finish — S, M, or L." },
        { name: "Fish Pizza", prices: { S: 8, M: 10, L: 12 }, subcategory: "Pizzas", imageKey: "pizza", description: "Fish pizza baked fresh in Small, Medium, or Large." },
        { name: "Assod Pizza Mixed", prices: { S: 10, M: 12, L: 14 }, subcategory: "Pizzas", imageKey: "pizza", description: "Signature Assod mixed pizza loaded with selected toppings." },
        { name: "Margherita Pizza", prices: { S: 6, M: 8, L: 10 }, subcategory: "Pizzas", imageKey: "pizza", description: "Classic Margherita with tomato, cheese, and herbs." },
        { name: "Hawaii Beef Pizza", prices: { S: 8, M: 10, L: 12 }, subcategory: "Pizzas", imageKey: "pizza", description: "Hawaii-style beef pizza with a sweet-savory balance." },
      ],
    },
    {
      id: "asian",
      name: "Asian Corner",
      description: "Curries, biryani, tikka, tandoori, and mandi specialties.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Mutton Curry", price: 8, subcategory: "Curry", imageKey: "curry", description: "Slow-cooked mutton curry with aromatic spices." },
        { name: "Chicken Curry", price: 7, subcategory: "Curry", imageKey: "curry", description: "Classic chicken curry in a rich, flavorful gravy." },
        { name: "Fish Curry", price: 8, subcategory: "Curry", imageKey: "curry", description: "Fish curry simmered with warm spice and sauce." },
        { name: "Beef Curry", price: 8, subcategory: "Curry", imageKey: "curry", description: "Tender beef curry cooked in a deep savory sauce." },
        { name: "Vegetable Curry", price: 6, subcategory: "Curry", imageKey: "curry", description: "Vegetable curry with a wholesome, spiced broth." },
        { name: "Mutton Biryani", price: 8, subcategory: "Biryani", imageKey: "biryani", description: "Fragrant mutton biryani layered with seasoned rice." },
        { name: "Fish Biryani", price: 8, subcategory: "Biryani", imageKey: "biryani", description: "Aromatic fish biryani cooked with fragrant spices." },
        { name: "Chicken Biryani", price: 8, subcategory: "Biryani", imageKey: "biryani", description: "Classic chicken biryani with richly seasoned rice." },
        { name: "Vegetable Biryani", price: 6, subcategory: "Biryani", imageKey: "biryani", description: "Vegetable biryani with fragrant rice and mild spice." },
        { name: "Chicken Butter", price: 9, imageKey: "curry", description: "Creamy butter chicken finished in a rich tomato sauce." },
        { name: "Chicken Tikka", price: 8, imageKey: "chicken", description: "Marinated chicken tikka grilled for smoky flavor." },
        { name: "Chicken Tandoori", price: 7, imageKey: "chicken", description: "Tandoori chicken with a bold, charred finish." },
        { name: "Mutton Tikka", price: 9, imageKey: "goat", description: "Mutton tikka grilled until tender and aromatic." },
        { name: "Fish Tikka", price: 8, imageKey: "fish", description: "Spiced fish tikka grilled for a light, savory bite." },
        { name: "Goat Mandi", price: 12, subcategory: "Mandi", imageKey: "mandi", description: "Signature goat mandi served with fragrant rice." },
        { name: "Fish Mandi", price: 9, subcategory: "Mandi", imageKey: "mandi", description: "Fish mandi prepared with aromatic rice and spice." },
        { name: "Chicken Mandi", price: 8, subcategory: "Mandi", imageKey: "mandi", description: "Chicken mandi with fragrant rice and traditional seasoning." },
      ],
    },
    {
      id: "kids",
      name: "Kids Menu",
      description: "Smaller portions made for younger guests.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Chicken Fingers", price: 5, imageKey: "kids", description: "Crispy chicken fingers sized for younger guests." },
        { name: "Fish Fingers", price: 5, imageKey: "kids", description: "Golden fish fingers, light and kid-friendly." },
        { name: "Chicken Nuggets", price: 5, imageKey: "nuggets", description: "Bite-sized chicken nuggets served crispy and hot." },
        { name: "Fish Nuggets", price: 5, imageKey: "nuggets", description: "Crispy fish nuggets perfect for little appetites." },
        { name: "Chips Masala", price: 4, imageKey: "fries", description: "Masala-spiced chips with a flavorful kids’ twist." },
        { name: "Kids Beef Suqaar", price: 5, imageKey: "beef", description: "Mild beef suqaar prepared in a kids’ portion." },
        { name: "Kids Chicken Suqaar", price: 4, imageKey: "chicken", description: "Gentle chicken suqaar sized for children." },
      ],
    },
    {
      id: "wadani",
      name: "Wadani Foods",
      description: "Local Wadani favorites from the Assod kitchen.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Garow Beef Kalan", price: 8, imageKey: "local", description: "Traditional garow beef kalan with authentic local flavor." },
        { name: "Garow Fish Kalan", price: 8, imageKey: "local", description: "Garow fish kalan prepared in a classic Wadani style." },
        { name: "Garow Chicken Kalan", price: 7, imageKey: "local", description: "Garow chicken kalan with comforting regional seasoning." },
        { name: "Garow", price: 3, imageKey: "local", description: "Simple garow, a beloved local staple at Assod." },
        { name: "Shuuro", price: 3, imageKey: "soup", description: "Warm shuuro soup with traditional Somali character." },
        { name: "Heed", price: 3, imageKey: "local", description: "Classic heed prepared as a comforting Wadani dish." },
        { name: "Galley", price: 3, imageKey: "local", description: "Traditional galley with wholesome local flavor." },
        { name: "Digir", price: 3, imageKey: "healthy", description: "Hearty digir beans cooked in a familiar home style." },
        { name: "Mixed Wadani", price: 3, imageKey: "local", description: "A mixed Wadani plate featuring selected local favorites." },
      ],
    },
    {
      id: "desserts",
      name: "Cakes & Desserts",
      description: "Cakes, pastries, and sweet finishes.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
      items: [
        { name: "Black Forest Cake", price: 2.5, imageKey: "cake", description: "Classic Black Forest cake with chocolate and cherry notes." },
        { name: "White Forest Cake", price: 2.5, imageKey: "cake", description: "Light White Forest cake with a soft creamy finish." },
        { name: "Cheese Cake", price: 3, imageKey: "cake", description: "Smooth cheesecake with a rich, creamy texture." },
        { name: "Tiramisu Cake", price: 2.5, imageKey: "cake", description: "Coffee-kissed tiramisu cake for an elegant dessert." },
        { name: "Red Velvet Cake", price: 2.5, imageKey: "cake", description: "Soft red velvet cake with a delicate cocoa taste." },
        { name: "Chocolate Cake", price: 2.5, imageKey: "cake", description: "Moist chocolate cake for a classic sweet ending." },
        { name: "Caramel Cake", price: 2.5, imageKey: "cake", description: "Caramel cake with a warm, buttery sweetness." },
        { name: "Strawberry Cake", price: 2.5, imageKey: "cake", description: "Light strawberry cake with a fruity finish." },
        { name: "Dry Cake", price: 1, imageKey: "pastry", description: "Simple dry cake, ideal with tea or coffee." },
        { name: "Croissant", price: 2, imageKey: "pastry", description: "Flaky butter croissant, baked golden and light." },
        { name: "Donut", price: 1, imageKey: "donut", description: "Soft sweet donut for a quick dessert treat." },
        { name: "Basbusa", price: 1, imageKey: "pastry", description: "Sweet basbusa syrup cake with a tender crumb." },
        { name: "Sambuza", price: 0.5, imageKey: "pastry", description: "Crispy sambuza pastry, savory and bite-sized." },
      ],
    },
  ],
};
