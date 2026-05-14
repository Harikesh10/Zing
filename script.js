let cart = JSON.parse(localStorage.getItem("cart")) || [];


const imageScr = ["./asset/salad.png","./asset/chicken.png","./asset/cake.png","./asset/wrap.png","./asset/pizza.png","./asset/icecream.png","./asset/biriyani.png","./asset/dosa.png","./asset/milkshake.png"]
        const imageName = ["Salad","Chicken","Cake","Wrap","Pizza","Ice Cream","Biriyani","Dosa","Milk Shake"]

        let foodData = ""
        for(let i=0 ; i<imageScr.length;i++){
            foodData = foodData+
            `
            <div class="food-item" id="food-item-${i}" onclick="update(this)">
                <img src="${imageScr[i]}" alt="">
                <p>${imageName[i]}</p>
            </div>
            \n
            `
        }
        console.log(foodData)
        document.getElementsByClassName("menu-item")[0].innerHTML=foodData
        

    //The salad section
        function updateSalad(){
            const salad=[
           {
            imgScr:"./asset/salad1.png",
            name:"Veggie Salad",
            info:"Get a great taste on the glimpse and taste of the veggie salad , made with the touch of native vegatables",
            price:120

         },
         {
            imgScr:"./asset/salad2.png",
            name:"Chicken Salad",
            info:"Get a great taste on the glimpse and taste of the Chicken salad , made with the touch of fresh juicy chicken",
            price:160

         },
         {
            imgScr:"./asset/salad3.png",
            name:"Italian Salad",
            info:"Get a great taste on the glimpse and taste of the Italian salad , made with the touch of italian vegatables",
            price:140

         },
         {
            imgScr:"./asset/salad4.png",
            name:"Mexican Salad",
            info:"Get a great taste on the glimpse and taste of the Mexican salad , made with the touch of mexican vegatables",
            price:140

         }
        ]

        let saladData = ''
        for(let i=0;i<salad.length;i++){
            saladData = saladData + 
            `
            <div class="dishes">
                <div class="dishes-container">
                    <div class="dishes-image">
                        <img src="${salad[i].imgScr}" alt="" class="dish-image">
                    </div>
        
                    <div class="dishes-info">
                        <h3>${salad[i].name}</h3>
                        <p>${salad[i].info}</p>
                        <p>₹${salad[i].price}</p>
                        <div class="food-buttons">
                            <button class="add-cart-btn" onclick="addToCart('${salad[i].name}', ${salad[i].price}, '${salad[i].imgScr}', this)">Add to Cart</button>
                            <button class="remove-cart-btn" onclick="removeByName('${salad[i].name}')">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
        document.getElementsByClassName('dish-container')[0].innerHTML = saladData
    }

    //Chicken section
    function updateChicken(){
        const chicken=[
    {
        imgScr:"./asset/chicken1.png",
        name:"Chicken 65",
        info:"Get the best taste of the chicken in the 65th form ! Unleash the best experience",
        price:180

    },
    {
        imgScr:"./asset/chicken2.png",
        name:"Chicken Manchurian",
        info:"Get the best taste of the chicken as a sause ! Unleash the best experience",
        price:180

    },
    {
        imgScr:"./asset/chicken3.png",
        name:"Chicken Butter Masala",
        info:"Get the best taste of the chicken as a masala! The best ! Unleash the best experience",
        price:200

    },
    {
        imgScr:"./asset/chicken4.png",
        name:"Fried Chicken",
        info:"Get the best taste of the chicken in the fried form ! Unleash the best experience",
        price:230

    },
    {
        imgScr:"./asset/chicken5.png",
        name:"Chicken Gravy",
        info:"Get the best taste of the chicken in the gravy texture ! Unleash the best experience",
        price:150

    }
    ]

    let chickenData=''
    for(let i=0;i<chicken.length;i++){
        chickenData = chickenData +
        `
        <div class="dishes">
                <div class="dishes-container">
                    <div class="dishes-image">
                        <img src="${chicken[i].imgScr}" alt="" class="dish-image">
                    </div>
        
                    <div class="dishes-info">
                        <h3>${chicken[i].name}</h3>
                        <p>${chicken[i].info}</p>
                        <p>₹${chicken[i].price}</p>
                        <div class="food-buttons">
                            <button class="add-cart-btn" onclick="addToCart('${chicken[i].name}', ${chicken[i].price}, '${chicken[i].imgScr}', this)">Add to Cart</button>
                            <button class="remove-cart-btn" onclick="removeByName('${chicken[i].name}')">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementsByClassName('dish-container')[0].innerHTML=chickenData
}

//Cake section
function updateCake(){
    const cake=[
{
    imgScr:"./asset/cake1.png",
    name:"Pastry",
    info:"Get the best bite of the variety of the pastry avaiable round the world",
    price:100

},
{
    imgScr:"./asset/cake2.png",
    name:"Sponge Cake",
    info:"Get the best spongy feel when you take a bite, let it bounce in your mouth",
    price:60

},
{
    imgScr:"./asset/cake3.png",
    name:"Ice-cream Cake",
    info:"Enjoy the best fingerlicking experience when taking a scope and a bite at the same time",
    price:120

}
]

let cakeData=''
for(let i=0;i<cake.length;i++){
    cakeData = cakeData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${cake[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${cake[i].name}</h3>
                    <p>${cake[i].info}</p>
                    <p>₹${cake[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${cake[i].name}', ${cake[i].price}, '${cake[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${cake[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=cakeData
}

//Wrap section
function updateWrap(){
    const wrap=[
{
    imgScr:"./asset/wrap1.png",
    name:"Paneer Wrap",
    info:"Feel the best bite of the smooth paneer taste melt down your mouth",
    price:140

},
{
    imgScr:"./asset/wrap2.png",
    name:"Chicken Wrap",
    info:"Feel the best bite of the juicy chicken melt down you mouth",
    price:160

},
{
    imgScr:"./asset/wrap3.png",
    name:"Chicken Shawarma",
    info:"Feel the best bite of the juicy chicken crunch with the sauce mixed melt down you mouth",
    price:160

},
{
    imgScr:"./asset/wrap4.png",
    name:"Lettuce Wrap",
    info:"Feel the best bite of the fresh lettuce and healthy meal melt down you mouth",
    price:120

}
]

let wrapData=''
for(let i=0;i<wrap.length;i++){
    wrapData +=
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${wrap[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${wrap[i].name}</h3>
                    <p>${wrap[i].info}</p>
                    <p>₹${wrap[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${wrap[i].name}', ${wrap[i].price}, '${wrap[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${wrap[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=wrapData
}

//Pizza section
function updatePizza(){
    const pizza=[
{
    imgScr:"./asset/pizza1.png",
    name:"Pepperroni Pizza",
    info:"Enjoy the best slice of pepperoni pizza you taste and let it boost the mood!",
    price:200

},
{
    imgScr:"./asset/pizza2.png",
    name:"Mushroom Pizza",
    info:"Enjoy the best slice of mushroom pizza you taste and let it boost the mood!",
    price:260

},
{
    imgScr:"./asset/pizza3.png",
    name:"Cheese Pizza",
    info:"Feel the best bite of the silky cheese crunch melt down you mouth",
    price:230

}
]

let pizzaData=''
for(let i=0;i<pizza.length;i++){
    pizzaData = pizzaData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${pizza[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${pizza[i].name}</h3>
                    <p>${pizza[i].info}</p>
                    <p>₹${pizza[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${pizza[i].name}', ${pizza[i].price}, '${pizza[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${pizza[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=pizzaData
}

//Ice-Cream section
function updateIcecream(){
    const icecream=[
{
    imgScr:"./asset/icecream1.png",
    name:"Vanilla ice-cream",
    info:"Get the best taste of vanilla essence melt down you tounge",
    price:50

},
{
    imgScr:"./asset/icecream2.png",
    name:"Chocolate ice-cream",
    info:"Get the best taste of chocolate essence melt down you tounge",
    price:50

},
{
    imgScr:"./asset/icecream3.png",
    name:"Strawberry ice-cream",
    info:"Get the best taste of strawberry essence melt down you tounge",
    price:50

},
{
    imgScr:"./asset/icecream4.png",
    name:"Falooda",
    info:"Get the best taste of mixed dishes in a column melt down you tounge",
    price:120

},
{
    imgScr:"./asset/icecream5.png",
    name:"Cone Ice-cream",
    info:"Get the best taste crunch and ice melt down you tounge",
    price:40

},
{
    imgScr:"./asset/icecream6.png",
    name:"Brownie Ice-cream",
    info:"Get the best taste of crunchy bite melt down you tounge",
    price:70

}
]

let icecreamData=''
for(let i=0;i<icecream.length;i++){
    icecreamData = icecreamData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${icecream[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${icecream[i].name}</h3>
                    <p>${icecream[i].info}</p>
                    <p>₹${icecream[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${icecream[i].name}', ${icecream[i].price}, '${icecream[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${icecream[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=icecreamData
}

//Biryani section
function updateBiryani(){
    const biryani=[
{
    imgScr:"./asset/biryani1.png",
    name:"Veg Biryani",
    info:"Experience the best bite of your life in the biryani aroma",
    price:150

},
{
    imgScr:"./asset/biryani2.png",
    name:"Chicken Biryani",
    info:"Experience the best bite of your life in the juicy chicken tender biryaniii",
    price:170

},
{
    imgScr:"./asset/biryani3.png",
    name:"Mutton Biryani",
    info:"Experience the best bite of your life in the juicy mutton chucka biryaniii",
    price:190

}
]

let biryaniData=''
for(let i=0;i<biryani.length;i++){
    biryaniData = biryaniData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${biryani[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${biryani[i].name}</h3>
                    <p>${biryani[i].info}</p>
                    <p>₹${biryani[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${biryani[i].name}', ${biryani[i].price}, '${biryani[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${biryani[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=biryaniData
}

//Dosa section
function updateDosa(){
    const dosa=[
{
    imgScr:"./asset/dosa1.png",
    name:"Plain Dosa",
    info:"Get the best dip in the sambar with the thin piece of the dosaaa",
    price:40

},
{
    imgScr:"./asset/dosa2.png",
    name:"Masala Dosa",
    info:"Get the best dip in the sambar with the thin piece of the dosaaaii and the spicy masala",
    price:80

},
{
    imgScr:"./asset/dosa3.png",
    name:"Ghee Roast",
    info:"Get the best dip in the sambar with the thin piece of the dosaaa with the ghee essence",
    price:70

}
]

let dosaData=''
for(let i=0;i<dosa.length;i++){
    dosaData = dosaData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${dosa[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${dosa[i].name}</h3>
                    <p>${dosa[i].info}</p>
                    <p>₹${dosa[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${dosa[i].name}', ${dosa[i].price}, '${dosa[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${dosa[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=dosaData
}

//Milkshake section
function updateMilkshake(){
    const milkshake=[
{
    imgScr:"./asset/milkshake1.png",
    name:"Vanilla Milkshake",
    info:"Get the chill vanilla milkshake run down your throat",
    price:100

},
{
    imgScr:"./asset/milkshake2.png",
    name:"Oreo Milkshake",
    info:"Taste the best sip of the oreo flavored milkshake that is fresh and cold ",
    price:120

}
]

let milkshakeData=''
for(let i=0;i<milkshake.length;i++){
    milkshakeData = milkshakeData +
    `
    <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${milkshake[i].imgScr}" alt="" class="dish-image">
                </div>
    
                <div class="dishes-info">
                    <h3>${milkshake[i].name}</h3>
                    <p>${milkshake[i].info}</p>
                    <p>₹${milkshake[i].price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${milkshake[i].name}', ${milkshake[i].price}, '${milkshake[i].imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${milkshake[i].name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `
}
document.getElementsByClassName('dish-container')[0].innerHTML=milkshakeData
}



    function update(obj){
            if(obj.id ==='food-item-0'){
                updateSalad()
            }
            else if(obj.id==='food-item-1'){
                updateChicken()
            }
            else if(obj.id ==='food-item-2'){
                updateCake()
            }
            else if(obj.id ==='food-item-3'){
                updateWrap()
            }
            else if(obj.id ==='food-item-4'){
                updatePizza()
            }
            else if(obj.id ==='food-item-5'){
                updateIcecream()
            }
            else if(obj.id ==='food-item-6'){
                updateBiryani()
            }
            else if(obj.id ==='food-item-7'){
                updateDosa()
            }
            else if(obj.id ==='food-item-8'){
                updateMilkshake()
            }
            else{
                return 0
            }
        }


        
        
        // Function to shuffle array to generate the random images from the array 
        // Using math.random to generate a random image from the array container
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        // The function is to make the dummy images to display all dishes and menu items randomly at page load 
        window.onload = function() {
            document.getElementsByClassName("menu-item")[0].innerHTML=foodData; 
            
            let allDishes = [
                { imgScr: "./asset/salad1.png", name: "Veggie Salad", info: "A fresh veggie delight", price: 120 },
                { imgScr: "./asset/chicken1.png", name: "Chicken 65", info: "Spicy fried chicken", price: 180 },
                { imgScr: "./asset/cake1.png", name: "Pastry", info: "Delicious pastry treat", price: 100 },
                { imgScr: "./asset/wrap1.png", name: "Paneer Wrap", info: "Stuffed paneer wrap", price: 140 },
                { imgScr: "./asset/pizza1.png", name: "Pepperoni Pizza", info: "Cheesy and spicy", price: 200 },
                { imgScr: "./asset/icecream1.png", name: "Vanilla Ice Cream", info: "Smooth and creamy", price: 50 },
                { imgScr: "./asset/biryani1.png", name: "Veg Biryani", info: "Aromatic rice dish", price: 150 },
                { imgScr: "./asset/dosa1.png", name: "Plain Dosa", info: "Crispy South Indian treat", price: 40 },
                { imgScr: "./asset/milkshake1.png", name: "Vanilla Milkshake", info: "Chilled and refreshing", price: 100 }
            ];
        

            //The loop to generate the random image from the array daapa
            shuffleArray(allDishes);
            let dishData = "";
            allDishes.forEach(dish => {
                dishData += `
                <div class="dishes">
                    <div class="dishes-container">
                        <div class="dishes-image">
                            <img src="${dish.imgScr}" alt="" class="dish-image">
                        </div>
                        <div class="dishes-info">
                            <h3>${dish.name}</h3>
                            <p>${dish.info}</p>
                            <p>₹${dish.price}</p>
                            <div class="food-buttons">
                                <button class="add-cart-btn" onclick="addToCart('${dish.name}', ${dish.price}, '${dish.imgScr}', this)">Add to Cart</button>
                                <button class="remove-cart-btn" onclick="removeByName('${dish.name}')">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            document.getElementsByClassName('dish-container')[0].innerHTML = dishData;
        };


const globalMenu = [
    // Salads
    { imgScr:"./asset/salad1.png", name:"Veggie Salad", info:"Get a great taste on the glimpse and taste of the veggie salad , made with the touch of native vegatables", price:120 },
    { imgScr:"./asset/salad2.png", name:"Chicken Salad", info:"Get a great taste on the glimpse and taste of the Chicken salad , made with the touch of fresh juicy chicken", price:160 },
    { imgScr:"./asset/salad3.png", name:"Italian Salad", info:"Get a great taste on the glimpse and taste of the Italian salad , made with the touch of italian vegatables", price:140 },
    { imgScr:"./asset/salad4.png", name:"Mexican Salad", info:"Get a great taste on the glimpse and taste of the Mexican salad , made with the touch of mexican vegatables", price:140 },
    // Chicken
    { imgScr:"./asset/chicken1.png", name:"Chicken 65", info:"Get the best taste of the chicken in the 65th form ! Unleash the best experience", price:180 },
    { imgScr:"./asset/chicken2.png", name:"Chicken Manchurian", info:"Get the best taste of the chicken as a sause ! Unleash the best experience", price:180 },
    { imgScr:"./asset/chicken3.png", name:"Chicken Butter Masala", info:"Get the best taste of the chicken as a masala! The best ! Unleash the best experience", price:200 },
    { imgScr:"./asset/chicken4.png", name:"Fried Chicken", info:"Get the best taste of the chicken in the fried form ! Unleash the best experience", price:230 },
    { imgScr:"./asset/chicken5.png", name:"Chicken Gravy", info:"Get the best taste of the chicken in the gravy texture ! Unleash the best experience", price:150 },
    // Cake
    { imgScr:"./asset/cake1.png", name:"Pastry", info:"Get the best bite of the variety of the pastry avaiable round the world", price:100 },
    { imgScr:"./asset/cake2.png", name:"Sponge Cake", info:"Get the best spongy feel when you take a bite, let it bounce in your mouth", price:60 },
    { imgScr:"./asset/cake3.png", name:"Ice-cream Cake", info:"Enjoy the best fingerlicking experience when taking a scope and a bite at the same time", price:120 },
    // Wrap
    { imgScr:"./asset/wrap1.png", name:"Paneer Wrap", info:"Feel the best bite of the smooth paneer taste melt down your mouth", price:140 },
    { imgScr:"./asset/wrap2.png", name:"Chicken Wrap", info:"Feel the best bite of the juicy chicken melt down you mouth", price:160 },
    { imgScr:"./asset/wrap3.png", name:"Chicken Shawarma", info:"Feel the best bite of the juicy chicken crunch with the sauce mixed melt down you mouth", price:160 },
    { imgScr:"./asset/wrap4.png", name:"Lettuce Wrap", info:"Feel the best bite of the fresh lettuce and healthy meal melt down you mouth", price:120 },
    // Pizza
    { imgScr:"./asset/pizza1.png", name:"Pepperroni Pizza", info:"Enjoy the best slice of pepperoni pizza you taste and let it boost the mood!", price:200 },
    { imgScr:"./asset/pizza2.png", name:"Mushroom Pizza", info:"Enjoy the best slice of mushroom pizza you taste and let it boost the mood!", price:260 },
    { imgScr:"./asset/pizza3.png", name:"Cheese Pizza", info:"Feel the best bite of the silky cheese crunch melt down you mouth", price:230 },
    // Ice Cream
    { imgScr:"./asset/icecream1.png", name:"Vanilla ice-cream", info:"Get the best taste of vanilla essence melt down you tounge", price:50 },
    { imgScr:"./asset/icecream2.png", name:"Chocolate ice-cream", info:"Get the best taste of chocolate essence melt down you tounge", price:50 },
    { imgScr:"./asset/icecream3.png", name:"Strawberry ice-cream", info:"Get the best taste of strawberry essence melt down you tounge", price:50 },
    { imgScr:"./asset/icecream4.png", name:"Falooda", info:"Get the best taste of mixed dishes in a column melt down you tounge", price:120 },
    { imgScr:"./asset/icecream5.png", name:"Cone Ice-cream", info:"Get the best taste crunch and ice melt down you tounge", price:40 },
    { imgScr:"./asset/icecream6.png", name:"Brownie Ice-cream", info:"Get the best taste of crunchy bite melt down you tounge", price:70 },
    // Biryani
    { imgScr:"./asset/biryani1.png", name:"Veg Biryani", info:"Experience the best bite of your life in the biryani aroma", price:150 },
    { imgScr:"./asset/biryani2.png", name:"Chicken Biryani", info:"Experience the best bite of your life in the juicy chicken tender biryaniii", price:170 },
    { imgScr:"./asset/biryani3.png", name:"Mutton Biryani", info:"Experience the best bite of your life in the juicy mutton chucka biryaniii", price:190 },
    // Dosa
    { imgScr:"./asset/dosa1.png", name:"Plain Dosa", info:"Get the best dip in the sambar with the thin piece of the dosaaa", price:40 },
    { imgScr:"./asset/dosa2.png", name:"Masala Dosa", info:"Get the best dip in the sambar with the thin piece of the dosaaaii and the spicy masala", price:80 },
    { imgScr:"./asset/dosa3.png", name:"Ghee Roast", info:"Get the best dip in the sambar with the thin piece of the dosaaa with the ghee essence", price:70 },
    // Milkshake
    { imgScr:"./asset/milkshake1.png", name:"Vanilla Milkshake", info:"Get the chill vanilla milkshake run down your throat", price:100 },
    { imgScr:"./asset/milkshake2.png", name:"Oreo Milkshake", info:"Taste the best sip of the oreo flavored milkshake that is fresh and cold ", price:120 }
];

function searchFood() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    
    // If search is empty, we could trigger window.onload logic or just show all dishes.
    // For now, if it's empty, let's just restore the default view (a random selection).
    if (!searchInput) {
        let allDishes = [
            { imgScr: "./asset/salad1.png", name: "Veggie Salad", info: "A fresh veggie delight", price: 120 },
            { imgScr: "./asset/chicken1.png", name: "Chicken 65", info: "Spicy fried chicken", price: 180 },
            { imgScr: "./asset/cake1.png", name: "Pastry", info: "Delicious pastry treat", price: 100 },
            { imgScr: "./asset/wrap1.png", name: "Paneer Wrap", info: "Stuffed paneer wrap", price: 140 },
            { imgScr: "./asset/pizza1.png", name: "Pepperoni Pizza", info: "Cheesy and spicy", price: 200 },
            { imgScr: "./asset/icecream1.png", name: "Vanilla Ice Cream", info: "Smooth and creamy", price: 50 },
            { imgScr: "./asset/biryani1.png", name: "Veg Biryani", info: "Aromatic rice dish", price: 150 },
            { imgScr: "./asset/dosa1.png", name: "Plain Dosa", info: "Crispy South Indian treat", price: 40 },
            { imgScr: "./asset/milkshake1.png", name: "Vanilla Milkshake", info: "Chilled and refreshing", price: 100 }
        ];
        shuffleArray(allDishes);
        renderDishes(allDishes);
        return;
    }

    // Filter through all items globally
    const filteredDishes = globalMenu.filter(dish => 
        dish.name.toLowerCase().includes(searchInput) || 
        dish.info.toLowerCase().includes(searchInput)
    );

    renderDishes(filteredDishes);
}

function renderDishes(dishesArray) {
    let dishData = "";
    dishesArray.forEach(dish => {
        dishData += `
        <div class="dishes">
            <div class="dishes-container">
                <div class="dishes-image">
                    <img src="${dish.imgScr}" alt="" class="dish-image">
                </div>
                <div class="dishes-info">
                    <h3>${dish.name}</h3>
                    <p>${dish.info}</p>
                    <p>₹${dish.price}</p>
                    <div class="food-buttons">
                        <button class="add-cart-btn" onclick="addToCart('${dish.name}', ${dish.price}, '${dish.imgScr}', this)">Add to Cart</button>
                        <button class="remove-cart-btn" onclick="removeByName('${dish.name}')">Remove</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
    document.getElementsByClassName('dish-container')[0].innerHTML = dishData;
}

const toggle = document.getElementById("themeToggle");
const modeText = document.querySelector(".mode-text");

// Initialize theme from local storage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    const cartImage = document.getElementById("cart-image");
    if (cartImage) cartImage.src = "./asset/cart1.svg";
}

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    const cartImage = document.getElementById("cart-image");
    if(document.body.classList.contains("dark-mode")) {
        cartImage.src = "./asset/cart1.svg";
        localStorage.setItem("theme", "dark");
    } else {
        cartImage.src = "./asset/cart.svg";
        localStorage.setItem("theme", "light");
    }
});

        

function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("active");
}

function addToCart(name, price, image, buttonElement) {

    const existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.quantity += 1;
    }
    else{
        cart.push({
            name,
            price,
            image,
            quantity: 1
        });
    }

    animateToCart(buttonElement, image);

    saveCart();
    renderCart();
}

function renderCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">

            <img src="${item.image}" alt="">

            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>

                <div class="cart-buttons">
                    <button onclick="increaseQuantity(${index})">+</button>
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>

        </div>
        `;
    });

    cartCount.innerText = count;
    cartTotal.innerText = total;
}

function increaseQuantity(index){
    cart[index].quantity += 1;
    saveCart();
    renderCart();
}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){
        cart[index].quantity -= 1;
    }
    else{
        cart.splice(index,1);
    }

    saveCart();
    renderCart();
}

function removeItem(index){
    cart.splice(index,1);
    saveCart();
    renderCart();
}

function removeByName(name){

    cart = cart.filter(item => item.name !== name);

    saveCart();
    renderCart();
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

renderCart();

function animateToCart(button, imageSrc){

    const image = document.createElement("img");

    image.src = imageSrc;
    image.classList.add("fly-image");

    document.body.appendChild(image);

    const buttonRect = button.getBoundingClientRect();
    const cartRect = document.querySelector(".cart-icon").getBoundingClientRect();

    image.style.left = buttonRect.left + "px";
    image.style.top = buttonRect.top + "px";

    setTimeout(() => {

        image.style.left = cartRect.left + "px";
        image.style.top = cartRect.top + "px";
        image.style.width = "20px";
        image.style.height = "20px";
        image.style.opacity = "0.5"; }, 50);

    setTimeout(() => {

        image.remove();

        document.querySelector(".cart-icon")
        .classList.add("bump-cart");

        setTimeout(() => {
            document.querySelector(".cart-icon")
            .classList.remove("bump-cart");
        }, 300);

    }, 1000);
}