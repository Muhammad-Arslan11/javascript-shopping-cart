
import {shopItems} from "./Data.js";
let shop = document.getElementById("shop");


// create a bucket for Items
 let bucket = JSON.parse(localStorage.getItem("data")) ||[];



// let quantity = 0; // quantity: for product quantity
// make a function to generate cards
let generateCard = () => {

  // run a map function over the shopItems
  return (shop.innerHTML = shopItems.map((item) => {
    
    // search for data here
     let search = bucket.find((x) => x.id === item.id) || [];
    //  console.log(search);
   

   
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
              <p class="quantity" id="quantity-${item.id}">${search.quantity === undefined ? 0: search.quantity}</p>
                <i onclick="decrement(${item.id})}" class="bi bi-dash"${item.id}></i>
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

if (!item) {
  // If item not found, add it to bucket with quantity 1
  bucket.push({ id: itemId, quantity: 1 });
}
    else{
    // If item with given id is found, increment its quantity
    item.quantity += 1;
    }

    // update UI
    update(itemId);
    // set the data into the local storage
    localStorage.setItem("data", JSON.stringify(bucket));
     // calculate
      //  calculate(); // calculate function should only be invoked in update function
 
}

// decrement quantity
function decrement(id) {

  let itemId = id;
  if(bucket === undefined) return ;
  // Find the item in the bucket array
  let item = bucket.find((elem) => elem.id === itemId);
  
  if (!item || item.quantity === 0) {
    return; // If item not found or quantity is already 0, return
  }
  
  else{
    // If item with given id is found, increment its quantity
    item.quantity -= 1;
  }

  // update UI
  update(itemId);
  bucket = bucket.filter((x)=> x.quantity !== 0);
  // set the data into the local storage
  localStorage.setItem("data", JSON.stringify(bucket));
   // calculate
    //  calculate(); // calculate function should only be invoked in update function
}

// function to update the UI
 function update(id){
  let search = bucket.find((elem) => elem.id === id);
  if(search){
    // update the textContent
    document.getElementById(`quantity-${id}`).textContent = search.quantity;
  }
  calculate();
}


 // function to calculate total items in the cart 
   function calculate(){
    if(bucket === undefined || bucket == []) return;
    let search = bucket.map((elem)=> elem.quantity).reduce((prev,curr) => prev+curr , 0);
    document.getElementById("cartAmount").textContent = search;
    // console.log(search);
   }
   calculate();

   

