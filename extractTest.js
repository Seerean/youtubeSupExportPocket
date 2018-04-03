var dailyFeed = document.getElementById("items").children;
var ArrayToExtract = [];
console.log("This is the extract when interacting in real page");
console.log(dailyFeed);
for (i = 0; i < dailyFeed.length; i++) {
  ArrayToExtract.push(dailyFeed[i].children[0].children[0].children[0].href);
}
ArrayToExtract;
