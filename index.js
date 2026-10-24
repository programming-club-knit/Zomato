const cimg = [
  "https://b.zmtcdn.com/data/collections/9328351d5015beb55abcf5e5cf1b2b9d_1711630587.jpg?output-format=webp",
  "https://b.zmtcdn.com/data/collections/d34beb284ecf96c437819e0d3e9ed105_1711630363.jpg?output-format=webp",
  "https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582285720.jpg?output-format=webp",
  "https://www.telegraph.co.uk/content/dam/Travel/2017/May/old-cafes-oslo.jpg?imwidth=1280",
  "https://b.zmtcdn.com/data/collections/d33b7f16f6f9549049b2c1ac96970be4_1711631065.jpg?output-format=webp",
  "https://b.zmtcdn.com/data/collections/9ae66c79494a519dfa863f99c50907ac_1688727851.png",
];
for (let i = 0; i < 6; i++) {
  const card = document.getElementsByClassName("cardd")[i];
  card.style.backgroundImage = `url("${cimg[i]}")`;
}
const leftbtn = document.querySelector(".left");
const rightbtn = document.querySelector(".right");
const container = document.querySelector(".card");
const scrollAmount = container.clientWidth;
rightbtn.addEventListener("click", () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
  leftbtn.style.opacity = "1";
  rightbtn.style.opacity = "0";
});
leftbtn.addEventListener("click", () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
  leftbtn.style.opacity = "0";
  rightbtn.style.opacity = "1";
});
const restaurants = [
  {
    image:
      "https://www.tripsavvy.com/thmb/WzbY1hD9IUUI2Y1WIEyvlYB8TWQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/26-5adafa56c6733500373c3cf5.jpg",
    discount: "20% OFF",
    name: "Burger Bistro",
    type: "Fast Food, Burgers",
    location: "Godowlia, Varanasi",
    distance: "1.2 km",
    rating: 4.2,
    priceForTwo: 300,
  },
  {
    image:
      "https://th.bing.com/th/id/R.281f362bff970c8caeff4d3931a731b0?rik=MtN8YDCntrRuTg&riu=http%3a%2f%2fwww.greavesindia.com%2fwp-content%2fuploads%2f2017%2f11%2f4-Aish.jpg&ehk=z1%2f7BwtTeGPR%2fuhVrgfEehMibispSe%2bsAce27nlNNVY%3d&risl=&pid=ImgRaw&r=0",
    discount: "30% OFF",
    name: "Pizza Planet",
    type: "Italian, Pizza",
    location: "Assi Ghat, Varanasi",
    distance: "2.5 km",
    rating: 4.5,
    priceForTwo: 500,
  },
  {
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/11/18150943/5r4t-24.jpg",
    discount: "10% OFF",
    name: "Dosa Delight",
    type: "South Indian",
    location: "Sigra, Varanasi",
    distance: "1.8 km",
    rating: 4.1,
    priceForTwo: 250,
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2023/01/1559-AD-Restaurant-Udaipur-Rajasthan.jpg",
    discount: "25% OFF",
    name: "Dragon Bowl",
    type: "Chinese, Asian",
    location: "Dashashwamedh Ghat, Varanasi",
    distance: "3.0 km",
    rating: 4.3,
    priceForTwo: 450,
  },
  {
    image:
      "https://www.tripsavvy.com/thmb/XtKEzkzgoJ8f7CTw3XAoAF6wBTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ParikramaDelhi2-5adaedec8023b90036478c7e.jpg",
    discount: "15% OFF",
    name: "Rajasthani Rasoi",
    type: "Indian, Thali",
    location: "Bhelupur, Varanasi",
    distance: "1.0 km",
    rating: 3.9,
    priceForTwo: 200,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    discount: "35% OFF",
    name: "Wok Express",
    type: "Chinese, Thai",
    location: "Mahmoorganj, Varanasi",
    distance: "2.2 km",
    rating: 4.6,
    priceForTwo: 600,
  },
  {
    image:
      "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/05/A4160-30-Beautiful-restaurants-in-India-IMG-4.jpg",
    discount: "40% OFF",
    name: "Fit Feast",
    type: "Healthy, Salads",
    location: "Sunderpur, Varanasi",
    distance: "2.9 km",
    rating: 4.0,
    priceForTwo: 350,
  },
  {
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/Indus-Restaurant-2_20180907160106.jpg",
    discount: "20% OFF",
    name: "Grill House",
    type: "American, Grill",
    location: "BHU Campus, Varanasi",
    distance: "1.7 km",
    rating: 3.8,
    priceForTwo: 550,
  },
  {
    image:
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-04/Pincode.jpg",
    discount: "50% OFF",
    name: "Biryani Hub",
    type: "Mughlai, Biryani",
    location: "Pandeypur, Varanasi",
    distance: "3.5 km",
    rating: 4.7,
    priceForTwo: 400,
  },
  {
    image:
      "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Bomras-Restaurant-Goa.jpg?w=1200&ssl=1",
    discount: "15% OFF",
    name: "Tandoori Flames",
    type: "North Indian, Punjabi",
    location: "Teliyabagh, Varanasi",
    distance: "1.3 km",
    rating: 4.0,
    priceForTwo: 480,
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2018/06/Best-Restaurant-Interior-Design-In-India-3.jpg",
    discount: "30% OFF",
    name: "Global Bites",
    type: "Continental, Fusion",
    location: "Cantonment, Varanasi",
    distance: "2.0 km",
    rating: 4.3,
    priceForTwo: 520,
  },
  {
    image:
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/12/281216MasalaTrail01.jpg",
    discount: "10% OFF",
    name: "Brew & Bean",
    type: "Cafe, Coffee, Desserts",
    location: "Orderly Bazaar, Varanasi",
    distance: "0.8 km",
    rating: 4.4,
    priceForTwo: 270,
  },
  {
    image:
      "https://www.designpataki.com/wp-content/uploads/2024/02/5-Rooftop-Restaurants-in-India-Promise-A-Perfect-Golden-Hour-This-Valentines-Day-feature-image-.jpg",
    discount: "25% OFF",
    name: "Mithai Ghar",
    type: "Indian Sweets, Snacks",
    location: "Chowk, Varanasi",
    distance: "1.5 km",
    rating: 3.7,
    priceForTwo: 150,
  },
  {
    image:
      "https://www.top25restaurants.com/media/img/2023/08/worlds-best-restaurant-megu-india.jpg",
    discount: "18% OFF",
    name: "Pasta La Vista",
    type: "Italian, Pasta",
    location: "Lanka, Varanasi",
    distance: "2.7 km",
    rating: 4.2,
    priceForTwo: 430,
  },
  {
    image:
      "https://media.istockphoto.com/id/1163284610/photo/very-stylish-indian-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=-0Bz0mNjnrDoXApfo6P_xBrKmIMPZYJwQ5zAGEpzThI=",
    discount: "20% OFF",
    name: "BBQ Bay",
    type: "Barbecue, Buffet",
    location: "Kabir Chaura, Varanasi",
    distance: "3.2 km",
    rating: 4.6,
    priceForTwo: 650,
  },
];
const clonerestaurant = [...restaurants].sort(
  (a, b) => a.priceForTwo - b.priceForTwo
);

const res = document.querySelector(".res-container");

restaurants.forEach((data) => {
  const restwrapper = document.createElement("div");
  restwrapper.setAttribute("data-aos", "zoom-in");
  res.appendChild(restwrapper);

  const rest = document.createElement("div");
  rest.className = "restaurant";
  const imgc = document.createElement("div");
  imgc.className = "restimg";
  imgc.style.backgroundImage = `url("${data.image}")`;
  imgc.innerHTML = `<div class="offer-badge">
                     <span class="icon">%</span>
                    <span class="text">Flat ${data.discount}</span>
                    </div>`;
  rest.appendChild(imgc);

  const info = document.createElement("div");
  info.className = "restinfo";
  info.innerHTML = `
        <div><h3>${data.name}</h3><h3>${data.rating}⭐</h3></div>
        <div><h3>${data.type}</h3><h3>₹${data.priceForTwo}</h3></div>
        <div><h3>${data.location}</h3><h3>${data.distance}</h3></div>
      `;
  rest.appendChild(info);

  restwrapper.appendChild(rest);
});
const darkicon = document.getElementById("darkicon");
let day = true;
const body = document.querySelector("body");
let zomatologo = document.querySelectorAll(".zomato-logo");
darkicon.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  if (day == true) {
    darkicon.innerHTML = `<i class="fa-solid fa-sun"></i> Light`;
    zomatologo.forEach((value) => {
      value.setAttribute(
        "src",
        "https://brandlogos.net/wp-content/uploads/2025/02/zomato-logo_brandlogos.net_9msh7.png"
      );
    });

    day = false;
  } else {
    darkicon.innerHTML = `<i class="fa-solid fa-moon"></i>  Dark`;
    zomatologo.forEach((value) => {
      value.setAttribute(
        "src",
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      );
    });
    day = true;
  }
});

const lth = document.querySelector(".sortbtn");
let Issorted = false;
lth.addEventListener("click", () => {
  if (!Issorted) {
    lth.style.backgroundColor = "blue";
    lth.style.color = "white";
    res.innerHTML = "";
    clonerestaurant.filter((val)=>(val.priceForTwo < 500)).forEach((data) => {
      const restwrapper = document.createElement("div");
      restwrapper.setAttribute("data-aos", "zoom-in");
      res.appendChild(restwrapper);

      const rest = document.createElement("div");
      rest.className = "restaurant";
      const imgc = document.createElement("div");
      imgc.className = "restimg";
      imgc.style.backgroundImage = `url("${data.image}")`;
      imgc.innerHTML = `<div class="offer-badge">
                     <span class="icon">%</span>
                    <span class="text">Flat ${data.discount}</span>
                    </div>`;
      rest.appendChild(imgc);

      const info = document.createElement("div");
      info.className = "restinfo";
      info.innerHTML = `
        <div><h3>${data.name}</h3><h3>${data.rating}⭐</h3></div>
        <div><h3>${data.type}</h3><h3>₹${data.priceForTwo}</h3></div>
        <div><h3>${data.location}</h3><h3>${data.distance}</h3></div>
      `;
      rest.appendChild(info);

      restwrapper.appendChild(rest);
      Issorted = true;
    });
  }
  else {
    lth.style.backgroundColor = "white";
    res.innerHTML = "";
        lth.style.color = "black";
    restaurants.forEach((data) => {
      const restwrapper = document.createElement("div");
      restwrapper.setAttribute("data-aos", "zoom-in");
      res.appendChild(restwrapper);

      const rest = document.createElement("div");
      rest.className = "restaurant";
      const imgc = document.createElement("div");
      imgc.className = "restimg";
      imgc.style.backgroundImage = `url("${data.image}")`;
      imgc.innerHTML = `<div class="offer-badge">
                     <span class="icon">%</span>
                    <span class="text">Flat ${data.discount}</span>
                    </div>`;
      rest.appendChild(imgc);

      const info = document.createElement("div");
      info.className = "restinfo";
      info.innerHTML = `
        <div><h3>${data.name}</h3><h3>${data.rating}⭐</h3></div>
        <div><h3>${data.type}</h3><h3>₹${data.priceForTwo}</h3></div>
        <div><h3>${data.location}</h3><h3>${data.distance}</h3></div>
      `;
      rest.appendChild(info);

      restwrapper.appendChild(rest);
      Issorted = false;
    });
  }
});

const underfivehund = [...restaurants].filter(
  (value) => value.priceForTwo < 500
);
console.log(underfivehund);

const ufive = document.querySelectorAll(".sortbtn")[1];
let isunder500 = false;
ufive.addEventListener("click", () => {
  if (isunder500) {
    res.innerHTML = "";
    ufive.style.backgroundColor = "white";
    ufive.style.color = "black";
    clonerestaurant = [...restaurants].sort(
      (a, b) => a.priceForTwo - b.priceForTwo && a.priceForTwo <500
    );
    underfivehund.forEach((data) => {
      const restwrapper = document.createElement("div");
      restwrapper.setAttribute("data-aos", "zoom-in");
      res.appendChild(restwrapper);

      const rest = document.createElement("div");
      rest.className = "restaurant";
      const imgc = document.createElement("div");
      imgc.className = "restimg";
      imgc.style.backgroundImage = `url("${data.image}")`;
      imgc.innerHTML = `<div class="offer-badge">
                     <span class="icon">%</span>
                    <span class="text">Flat ${data.discount}</span>
                    </div>`;
      rest.appendChild(imgc);

      const info = document.createElement("div");
      info.className = "restinfo";
      info.innerHTML = `
        <div><h3>${data.name}</h3><h3>${data.rating}⭐</h3></div>
        <div><h3>${data.type}</h3><h3>₹${data.priceForTwo}</h3></div>
        <div><h3>${data.location}</h3><h3>${data.distance}</h3></div>
      `;
      rest.appendChild(info);

      restwrapper.appendChild(rest);
      isunder500 = false;
    });
  } else {
    res.innerHTML = "";
    ufive.style.backgroundColor = "blue";
    ufive.style.color = "white";
    

    underfivehund.forEach((data) => {
      const restwrapper = document.createElement("div");
      restwrapper.setAttribute("data-aos", "zoom-in");
      res.appendChild(restwrapper);

      const rest = document.createElement("div");
      rest.className = "restaurant";
      const imgc = document.createElement("div");
      imgc.className = "restimg";
      imgc.style.backgroundImage = `url("${data.image}")`;
      imgc.innerHTML = `<div class="offer-badge">
                     <span class="icon">%</span>
                    <span class="text">Flat ${data.discount}</span>
                    </div>`;
      rest.appendChild(imgc);

      const info = document.createElement("div");
      info.className = "restinfo";
      info.innerHTML = `
        <div><h3>${data.name}</h3><h3>${data.rating}⭐</h3></div>
        <div><h3>${data.type}</h3><h3>₹${data.priceForTwo}</h3></div>
        <div><h3>${data.location}</h3><h3>${data.distance}</h3></div>
      `;
      rest.appendChild(info);

      restwrapper.appendChild(rest);
      isunder500 = true;

      
    });
  }
});
