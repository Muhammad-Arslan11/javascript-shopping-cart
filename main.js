
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
 let bucket = JSON.parse(localStorage.getItem("data")) ||[];



// let quantity = 0; // quantity: for product quantity
// make a function to generate cards
let generateCard = () => {

  // run a map function over the shopItems
  return (shop.innerHTML = shopItems.map((item) => {
    // search for data here
     let search = bucket.find((x) => x.id === item.id) || [];

     console.log("bucket: ",bucket ,"search: ",search)
   
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
              <p class="quantity" id="quantity-${item.id}">${search.quantity === undefined? 0: search.quantity}</p>
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

if (!item) {
  // If item not found, add it to bucket with quantity 1
  bucket.push({ id: itemId, quantity: 1 });
}
    else{
    // If item with given id is found, increment its quantity
    item.quantity += 1;
    }

    // set the data into the local storage
    localStorage.setItem("data", JSON.stringify(bucket));
    // update UI
    update(itemId);
     // calculate
       calculate();
 
}

// decrement quantity
function decrement(id) {

  let itemId = id;
  // Find the item in the bucket array
  let item = bucket.find((elem) => elem.id === itemId);

  if (!item || item.quantity === 0) {
    return; // If item not found or quantity is already 0, return
  }
   
   else{
   // If item with given id is found, increment its quantity
   item.quantity -= 1;
   }
  // set the data into the local storage
   localStorage.setItem("data", JSON.stringify(bucket));
   // update UI
   update(itemId);
   // calculate
   calculate();
}

// function to update the UI
 function update(id){
  let search = bucket.find((elem) => elem.id === id);
  console.log(search);
  if(search){
    // update the textContent
    document.getElementById(`quantity-${id}`).textContent = search.quantity;
  }
}


 // function to calculate total items in the cart 
   function calculate(){
    let search = bucket.map((elem)=> elem.quantity).reduce((prev,curr) => prev+curr);
    document.getElementById("cartAmount").textContent = search;
    // console.log(search);
   }
   calculate();

   

