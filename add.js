var ArrayToAdd = [];
var dailyFeed = document.getElementById("items").children;
console.log(dailyFeed);
console.log("This is the length " + dailyFeed.length);
console.log(dailyFeed[1].children[0].children[0].children[0].href);
for (i = 0; i < dailyFeed.length; i++) {
  ArrayToAdd.push(dailyFeed[i].children[0].children[0].children[0].href);
}
console.log(ArrayToAdd);
