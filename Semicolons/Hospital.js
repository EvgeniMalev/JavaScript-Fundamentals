let name = "Sveta Marina";
let facilities = 8;
let doctors = 340;
let midwifes = 20;

function greet(name) {
  console.log("This is the hospital " + name + ".");
  return;
}

greet(name);

if (doctors > 340) {
  console.log("There are enough doctors");
} else {
  console.log("You need to appoint more doctors.");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let doctor1 = {
  name: "Stoichev",
  age: 54,
  occupation: "Neurosurgeon"
};

let doctorsList = [doctor1]; 

console.log(doctorsList[0].name);
console.log(doctorsList[0].age);

let hospitalActivities = ["ambulance", "beds", "medical apparatus"];

console.log(ageResult);
