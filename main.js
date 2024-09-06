
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
    price: "$ 45"
  },

  {
    id: "1",
    image: "./images/img-2.jpg",
    hieght: "200px",
    width: "220px",
    name: "Office Shirts",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 60"
  },


  {
    id: "2",
    image: "./images/img-3.jpg",
    hieght: "200px",
    width: "220px",
    name: "T-shirts",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 85"
  },

  {
    id: "3",
    image: "./images/img-4.jpg",
    hieght: "200px",
    width: "220px",
    name: "Mens Suit",
    details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    price: "$ 100"
  }
]



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
              <p class="quantity" id="quantity">${quantity}</p>
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
  // console.log(id)
quantity += 1;
  // update the quantity
}

// decrement quantity
function decrement(e) {

  if (quantity > 0) {
    quantity -= 1;
    // update the quantity

 }
}