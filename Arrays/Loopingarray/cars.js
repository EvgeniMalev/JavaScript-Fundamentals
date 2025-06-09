const cars = ["VAZ", "AZLK", "GAZ", "Zastava"];
let fLen = cars.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";
