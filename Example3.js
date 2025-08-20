// let today = new Date();
// console.log("Date",today);

 let students = ["Keerthi","Komali","Star"];
// students.push("Parnika");
// console.log(students)
// students.unshift("Chaitanya");
// console.log(students)
// students.splice(2,1,"bhu");
// console.log(students)
// students.pop("Keerthi")
// console.log("Looping through students:");

// for(let student of students) {
//     console.log(student);
// }

// console.log("While loop - Roll Numbers:");
// let rn = 101;
// while(rn <= 103) {
//     console.log("Roll No:",rn);
//     rn++;
// }
// let floor = 1;
// do {
//     console.log("Hostel Floor:",floor);
//     floor++;
// }while(floor <= 3);



// console.log("Round 4.7:", Math.round(4.7));    // 5
// console.log("Round 4.3:", Math.round(4.3));    // 4
// console.log("Ceil 4.1:", Math.ceil(4.1));      // 5
// console.log("Floor 4.9:", Math.floor(4.9));    // 4
// console.log("Truncate 4.9:", Math.trunc(4.9)); // 4
// console.log("Absolute of -25:", Math.abs(-25)); // 25
// console.log("2^3:", Math.pow(2, 3));           // 8
// console.log("Square root of 49:", Math.sqrt(49)); // 7

let studentMap = new Map();
studentMap.set("101",{name: "Ramya",dept: "CSE"});
studentMap.set("102",{name: "keerthi",dept: "ECE"});
studentMap.set("103",{name: "hasini",dept:"MECH"});
console.log("Student 103:",studentMap.get("103"));
