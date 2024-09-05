
 let shop  = document.getElementById("shop");

 // data for shopItems
  let shopItems = [
    {
        image: "./images/img-1.jpg",
        hieght: "200px",
        width: "220px",
        name: "Casual Shirts",
        details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        price: "$ 45"
    },

    {     image: "./images/img-2.jpg",
        hieght: "200px",
        width: "220px",
        name: "T-shirts",
        details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        price: "$ 60"
    },

    {       image: "./images/img-3.jpg",
        hieght: "200px",
        width: "220px",
        name: "Office Shirts",
        details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        price: "$ 85"
    },

    {   image: "./images/img-4.jpg",
        hieght: "200px",
        width: "220px",
        name: "Mens Suit",
        details: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        price: "$ 100"}
  ]



let quantity = 0; // quantity: for product quantity
  // make a function to generate cards
  let generateCard = () =>{
    
        // run a map function over the shopItems
    return (shop.innerHTML =  shopItems.map((item) =>{
    return(
        `<div class="item">
          <div><img src="${item.image}" width="${item.width}" height="${item.hieght}"></div>
          <div class="desc">
            <h2 class="name">${item.name}</h2>
            <p class="details">${item.details}</p>
          </div>
          <div class="price-quantity">
            <p class="price">${item.price}</p>
            <div class="buttons">
              <i class="bi bi-plus"></i>
              <p class="quantity" id="quantity">${quantity}</p>
              <i class="bi bi-dash"></i>
            </div>
          </div>
        </div>
        `

    )
        }) 
    ); 
  }
  generateCard();

// increment quantity
let plusBtn = document.querySelectorAll("bi bi-plus");
plusBtn.addEventListener("click", function(){
    quantity += 1;
    // update the quantity
 document.querySelector(".quantity").textContent = quantity;
});

// decrement quantity
 let minusBtn = document.querySelectorAll("bi bi-dash");
 minusBtn.addEventListener("click", function(){
    if(quantity != 0){
        quantity -= 1;
    }
    // update the quantity
 document.querySelector(".quantity").textContent = quantity;
});