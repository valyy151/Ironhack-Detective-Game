//Suspects
let mrGreen = {
  name: "Jacob Green",
  occupation: "an Entrepreneur ",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
  color: "green ",
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "a Scientist",
  age: 26,
  description:
    "She is the adopted daughter of Mr. Boddy and has a PhD in plant toxicology",
  image:
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
  color: "white",
};

let profPlum = {
  name: "Victor Plum",
  occupation: "a Designer",
  age: 22,
  description: "He is a Billionaire video game designer",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
  color: "purple",
};

let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "an Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red",
};

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "a Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
  color: "blue",
};

let mrMustard = {
  name: "Jack Mustard",
  occupation: "a Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow",
};

// ### Weapons

let rope = {
  name: "Rope",
  weight: 10,
};

let knife = {
  name: "Knife",
  weight: 8,
};

let candlestick = {
  name: "Candlestick",
  weight: 2,
};

let dumbbell = {
  name: "Dumbbell",
  weight: 30,
};

let poison = {
  name: "Poison",
  weight: 2,
};

let axe = {
  name: "Axe",
  weight: 15,
};

let bat = {
  name: "Bat",
  weight: 13,
};

let trophy = {
  name: "Trophy",
  weight: 25,
};

let pistol = {
  name: "Pistol",
  weight: 20,
};

// ### Rooms

let diningRoom = {
  name: "Dining Room",
};
let conservatory = {
  name: "Conservatory",
};
let kitchen = {
  name: "Kitchen",
};
let study = {
  name: "Study",
};
let library = {
  name: "Library",
};
let billiardRoom = {
  name: "Billiard Room",
};
let lounge = {
  name: "Lounge",
};
let ballroom = {
  name: "Ballroom",
};
let hall = {
  name: "Hall",
};
let spa = {
  name: "Spa",
};
let livingRoom = {
  name: "Living Room",
};
let observatory = {
  name: "Observatory",
};
let theater = {
  name: "Theater",
};
let guestHouse = {
  name: "Guest House",
};
let patio = {
  name: "Patio",
};

let suspects = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];

let weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

let rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio,
];

function revealSuspect() {
  let suspect = Math.floor(Math.random() * suspects.length);
  let weapon = Math.floor(Math.random() * weapons.length);
  let room = Math.floor(Math.random() * rooms.length);
  return console.log(
    `The murderer is ${suspects[suspect].name}, ${suspects[suspect].occupation} aged ${suspects[suspect].age}.
    ${suspects[suspect].description} 
    ${weapons[weapon].name} was the murderers weapon of choice weighing ${weapons[weapon].weight} pounds. 
    The murder took place in the ${rooms[room].name}.`
  );
}

let suspectsDiv = document.querySelectorAll("div")[0];
let weaponsDiv = document.querySelectorAll("div")[1];
let roomsDiv = document.querySelectorAll("div")[2];

function showSuspects() {
  suspects.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element.name;
    suspectsDiv.appendChild(newLi);
  });
}
function showWeapons() {
  weapons.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element.name;
    weaponsDiv.appendChild(newLi);
  });
}
function showRooms() {
  rooms.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element.name;
    roomsDiv.appendChild(newLi);
  });
}

function showInfo() {
  setTimeout(showSuspects, 500);
  setTimeout(showWeapons, 1500);
  setTimeout(showRooms, 2500);
}
