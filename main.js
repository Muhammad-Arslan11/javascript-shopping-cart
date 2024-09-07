
let shop = document.getElementById("shop");



// data for shopItems
let shopItems = [
  {
    id: "0",
    image: "./images/img-1.jpg",
    hieght: "200px",
    width: "220px",
    name: "Casual Shirts",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 45",

  },

  {
    id: "1",
    image: "./images/img-2.jpg",
    hieght: "200px",
    width: "220px",
    name: "Office Shirts",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 60",
   
  },


  {
    id: "2",
    image: "./images/img-3.jpg",
    hieght: "200px",
    width: "220px",
    name: "T-shirts",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 85",
   
  },

  {
    id: "3",
    image: "./images/img-4.jpg",
    hieght: "200px",
    width: "220px",
    name: "Mens Suit",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 100",
   
  }
]

// create a bucket for Items
 let bucket = [];



let quantity = 0; // quantity: for product quantity
// make a function to generate cards
let generateCard = () => {

  // run a map function over the shopItems
  return (shop.innerHTML = shopItems.map((item) => {
    return (
      `<div class="item" id=${item.id}>
          <div><img src="${item.image}" width="${item.width}" height="${item.hieght}"></div>
          <div class="desc">
            <h2 class="name">${item.name}</h2>
            <p class="details">${item.details}</p>
          </div>
          <div class="price-quantity">
            <p class="price">${item.price}</p>
            <div class="buttons">
              <i onclick="increment(${item.id})" class="bi bi-plus"id=></i>
              <p class="quantity" id="quantity-${item.id}">${quantity}</p>
              <i onclick="decrement(${item.id})" class="bi bi-dash"${item.id}></i>
            </div>
          </div>
        </div>
        `

    )
  }).join(" ")
  );
}
generateCard();

// increment quantity
function increment(id) {
  let itemId = id;

   // Find the item in the bucket array
   let item = bucket.find((elem) => elem.id === itemId);
  //  console.log(item);

  if(item === undefined){
    // push the id and quantity of item inside the bucket
      bucket.push({
         id: itemId,
         quantity:1, 
      });
      
    }
    else{
    // If item with given id is found, increment its count
    item.quantity += 1;
    }
  // console.log(id)
    // console.log(bucket);
    update(itemId);

 
}

// decrement quantity
function decrement(id) {

  let itemId = id;
  // Find the item in the bucket array
  let item = bucket.find((elem) => elem.id === itemId);

 if(item === undefined){
   return;
  } 
 if(item.quantity === 0){
  return;
} 
   
   else{
   // If item with given id is found, increment its count
   item.quantity -= 1;
   }
   // console.log(id)
  //  console.log(bucket);
   update(itemId);
   calculate();
}

// function to update the quantity
 function update(id){
  let search = bucket.find((elem) => elem.id === id);
  // console.log(search);
  if(search){
    // update the textContent
    document.getElementById(`quantity-${id}`).textContent = search.quantity;

  }
  calculate();
 }

 // function to calculate total items in the cart 
   function calculate(){
    let search = bucket.map((elem)=> elem.quantity).reduce((prev,curr) => prev+curr);
    document.getElementById("cartAmount").textContent = search;
    // console.log(search);
   }

