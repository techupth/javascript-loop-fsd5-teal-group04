// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
while (i in restaurants) {
    newRestaurants.push(`Restaurant Name: ${restaurants[i]}`);
  i++;
}
console.log(newRestaurants);
