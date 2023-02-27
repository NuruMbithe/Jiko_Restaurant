const menu = [
    {
      id: 2,
      title: "Charcoal Brisket",
      category: "lunch",
      price: 13.99,
      img: "https://i.postimg.cc/mgmdt86H/smoked-samosas.jpg",
      desc: `mitmita, cumin, green onions, pickled
      vegetables, wasabi mayo `,
    },
    {
      id: 3,
      title: "Sangria",
      category: "Drinks",
      price: 6.99,
      img: "https://i.postimg.cc/xTwsHX00/sangria.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 3,
      title: "Passion Mojito",
      category: "Drinks",
      price: 6.99,
      img: "https://i.postimg.cc/kXKHTQYV/strawberrycocktail.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Mahamri",
      category: "breakfast",
      price: 20.99,
      img: "https://i.postimg.cc/C54G9x3q/mahamri.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Pulled Pork Burger",
      category: "lunch",
      price: 22.99,
      img: "https://i.postimg.cc/c4c5ws52/Whats-App-Image-2022-11-15-at-07-42-12.jpg",
      desc: `smoked pulled pork, panko fried onion, garden salad,
      sorghum flour bun, arrowroot crisps, mango salsa `,
    },
    {
      id: 5,
      title: "Sukuma Raviolli",
      category: "lunch",
      price: 22.99,
      img: "https://i.postimg.cc/TYgM5MrW/sukuma-ravioli.jpg",
      desc: `mushroom, goat cheese, sautéed cherry tomatoes `,
    },
    {
      id: 6,
      title: "Wonder Shake",
      category: "shakes",
      price: 18.99,
      img: "https://i.postimg.cc/DZtSw3Tw/Whats-App-Image-2022-11-15-at-08-25-13.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Fluffy Blueberry Pancakes",
      category: "breakfast",
      price: 8.99,
      img: "https://i.postimg.cc/RhdxbwXx/Whats-App-Image-2022-11-15-at-08-19-51.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Mandazi Club",
      category: "lunch",
      price: 12.99,
      img: "https://i.postimg.cc/xd7bZzq7/sandwitch-fries.jpg",
      desc: `grilled chicken, fried egg, cheese, ham, tomato,
      lettuce, berbere spiced french fries, garden salad`,
    },
    {
      id: 9,
      title: "Death by Chocolate",
      category: "shakes",
      price: 16.99,
      img: "https://i.postimg.cc/nh0f1KM4/Whats-App-Image-2022-11-15-at-08-19-39.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Kenyan Green Salad",
      category: "dinner",
      price: 16.99,
      img:"https://i.postimg.cc/ryDfz1Sd/salad-peas.jpg",
      desc: `mixed greens, grilled prawns, bacon lardons, sundried
      tomatoes, capers, avocado, green beans, broccoli, chili
      croutons, yoghurt-herb dressing.`,
    },
    {
      id: 10,
      title: "Kale Pesto Roc Cod",
      category: "dinner",
      price: 16.99,
      img:"https://i.postimg.cc/WzsrmPdb/mukimo.jpg",
      desc: `curry leaf, coconut and raw mango sauce, sautéed
      amaranth, mukimo`,
    },
    {
      id: 11,
      title: "Coffee",
      category: "breakfast",
      price: 8.99,
      img: "https://i.postimg.cc/nh9vzMDP/pexels-pixabay-414555.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 12,
      title: "Avocado & Egg Toast",
      category: "breakfast",
      price: 8.99,
      img: "https://i.postimg.cc/tJFKp9zZ/pexels-foodie-factor-566566.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 13,
      title: "Mint Shake",
      category: "shakes",
      price: 16.99,
      img: "https://i.postimg.cc/q7bhxTy3/pexels-amirali-beigi-868511.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 14,
      title: "Strawberry Shake",
      category: "shakes",
      price: 16.99,
      img: "https://i.postimg.cc/yYyNTKz8/pexels-roman-odintsov-5337717.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 15,
    title: "Delish Burger",
    category: "dinner",
    price: 16.99,
    img:"https://i.postimg.cc/c4c5ws52/Whats-App-Image-2022-11-15-at-07-42-12.jpg",
    desc: `curry leaf, coconut and raw mango sauce, sautéed
    amaranth, mukimo`,
  },
  {
  id: 15,
  title: "Fussion Burger",
  category: "dinner",
  price: 16.99,
  img:"https://i.postimg.cc/bJCYhWNR/pexels-rajesh-tp-1633525.jpg",
  desc: `curry leaf, coconut and raw mango sauce, sautéed
  amaranth, mukimo`,
},
{
  id: 16,
  title: "Orange Mojito",
  category: "Drinks",
  price: 6.99,
  img: "https://i.postimg.cc/sDDyPhfv/pexels-sadman-chowdhury-1564534.jpg",
  desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
},
{
  id: 17,
  title: "Blueberry",
  category: "Drinks",
  price: 6.99,
  img: "https://i.postimg.cc/yN7TWsy4/pexels-santiago-moreno-9171554.jpg",
  desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
},
  ];
  
  const sectionCenter = document.querySelector('.section-center');
  const btnContainer= document.querySelector(".btn-container");
  
  
  //load items
  window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems (menu);
    const categories= menu.reduce(function(values,item) {
      if(!values.includes(item.category)) {
        values.push(item.category);
      }
  return values
    }, ['all']
    );
    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" type="button" data-id= ${category}>${category}</button>`
    })
    .join("");  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
  
    //filter items
  filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category)
        return menuItem;
  
      })
      if(category ==='all'){
        displayMenuItems(menu)
      }else{
        displayMenuItems(menuCategory);
      }
     });
    });
  });
  
  
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
      return `<div class="tile"> 
      <img src= ${item.img} c alt= ${item.title}>
    <div class="text">
        <h3 > ${item.title} </h3>
         <h4 class="animate-text">${item.price} </h4>
         <p class="animate-text">${item.desc}</p>
      </div>
    </div>`
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
  }


 
  